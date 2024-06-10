/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useEffect, useState } from "react"
import { UserResult } from "../server/api"
import { useSession } from "next-auth/react"
import { userApi } from "@/server"

const mem: { user: undefined | UserResult } = { user: undefined }

export function useUser() {
  const [user, setUser] = useState<UserResult | null>()

  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "authenticated") {
      if (mem.user) {
        setUser(mem.user)
      } else {
        userApi.getServerUser({ id: session.user?.email ?? '' })
          .then(r => {
            mem.user = r
            setUser(r)
          })
          .catch(err => {
            mem.user = undefined
            setUser(null)
          })
      }
    } else {
      mem.user = undefined
      setUser(null)
    }
  }, [session?.user, status])

  return user
}

