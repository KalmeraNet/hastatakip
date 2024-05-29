"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { GetUserOutputParam, getServerUser } from "."

const _user = createContext<GetUserOutputParam>({
  id: "",
  fullName: "",
  initial: "",
  role: "",
  password: "",
})

export function UserProvider({ children }: { children: any }) {
  const [user, setUser] = useState<GetUserOutputParam>({
    id: "",
    fullName: "",
    initial: "",
    role: "",
    password: "",
  })

  useEffect(() => {
    if (user.id == "") {
      getServerUser({ id: "andre" }).then((o) => {
        setUser((x) => ({
          ...x,
          id: o.id,
          fullName: o.fullName,
          initial: o.initial,
          role: o.role,
          password: o.password,
        }))
      })
    }
  }, [user.id])

  return <_user.Provider value={user}>{children}</_user.Provider>
}

export function useUser() {
  return useContext(_user)
}

// const _user: { user: GetUserOutputParam | null } = { user: null };

// export const setUser = (usr: GetUserOutputParam | null) => {
//     console.log('Set')
//     _user.user = usr;
// }

// export const getUser = () => {
//     console.log('aaa: ' + (_user.user?.id ?? 'XXX'))
//     return _user.user;
// };
