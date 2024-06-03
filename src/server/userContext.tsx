"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { GetServerUserResult, UserFunctionsApi } from "./api"
import { userApi } from "."

const _user = createContext<GetServerUserResult>({
  id: "",
  fullName: "",
  initial: "",
  role: "",
})

export function UserProvider({ children }: { children: any }) {
  const [user, setUser] = useState<GetServerUserResult>({
    id: "",
    fullName: "",
    initial: "",
    role: "",
  })

  useEffect(() => {
    if (user.id == "") {
      userApi.getServerUser({ id: "andre" }).then((o) => {
        setUser((x) => ({
          ...x,
          id: o.id,
          fullName: o.fullName,
          initial: o.initial,
          role: o.role,
        }))
      })
    }
  }, [user.id])

  return <_user.Provider value={user}>{children}</_user.Provider>
}

export function useUser() {
  return useContext(_user)
}
