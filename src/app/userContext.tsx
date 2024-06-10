/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useEffect, useState } from "react"
import { UserResult } from "../server/api"
import { useSession } from "next-auth/react"

export function useUser() {
  const [user, setUser] = useState<UserResult | null>()

  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "authenticated") {
      // setUser(session?.user)
    } else {
      setUser(null)
    }
  }, [session?.user, status])

  return user
}
