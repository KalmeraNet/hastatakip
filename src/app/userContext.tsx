/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useEffect, useState } from "react"
import { UserResult } from "../server/api"
import { useSession } from "next-auth/react"
import { userApi } from "@/server"

export function useUser() {
  const [user, setUser] = useState<UserResult | null>()

  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "authenticated") {
      userApi.getServerUser({ id: session.user?.email ?? '' })
        .then(r => {
          setUser(r)
        })
        .catch(err => {
          setUser(null)
        })
    } else {
      setUser(null)
    }
  }, [session?.user, status])

  return user
}

