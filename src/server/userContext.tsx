/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { UserResult } from "./api"
import { userApi } from "."
import { auth } from "@/auth"


// User
const _user = createContext<UserResult>({
  id: "",
  fullName: "",
  initial: "",
  role: "",
})

export function UserProvider({ children }: { children: any }) {
  const [user, setUser] = useState<UserResult>({
    id: "",
    fullName: "",
    initial: "",
    role: "",
  })

  useEffect(() => {
    if (user.id == "") {
      // userApi.getServerUser({ id: "andre" }).then((o) => {
      //   setUser((x) => ({
      //     ...x,
      //     id: o.id,
      //     fullName: o.fullName,
      //     initial: o.initial,
      //     role: o.role,
      //   }))
      // })
    }
  }, [user.id])

  return <_user.Provider value={user}>{children}</_user.Provider>
}

export function useUser() {
  const [user, setUser] = useState<UserResult>()
  useEffect(() => {
    auth().then(ath => {
      setUser(ath?.user as UserResult)
    })
      .catch(() => {
        setUser(undefined)
      })
  }, [])
  
  return user
}

// // Form
// const _form = createContext<FormResult>({
//   id: "",
//   date:"",
//   name:"",
//   price:0,
//   status:true,
//   tip:"",
//   title:"",
// })

// export function FormProvider({ children }: { children: any }) {
//   const [form, setForm] = useState<FormResult>({
//   id: "",
//   date:"",
//   name:"",
//   price:0,
//   status:true,
//   tip:"",
//   title:"",
// })

//   useEffect(() => {
//     if (form.id == "") {
//       formApi.getServerForm({ id: "andre" }).then((o) => {
//         setForm((x) => ({
//           ...x,
//           id: o.id,
//           date: o.date,
//           name:o.name,
//           price: o.price,
//           status: o.status,
//           tip: o.tip,
//           title: o.title
//         }))
//       })
//     }
//   }, [form.id])

//   return <_form.Provider value={form}>{children}</_form.Provider>
// }

// export function useForm() {
//   return useContext(_form)
// }

// // Forms
// const _forms = createContext<FormsResult>({
//   id: "",
//   name:"",
//   title:""
// })

// export function FormsProvider({ children }: { children: any }) {
//   const [forms, setForms] = useState<FormsResult>({
//   id: "",
//   name:"",
//   title:"",
// })

//   useEffect(() => {
//     if (forms.id == "") {
//       formsApi.getServerForms({ id: "andre" }).then((o) => {
//         setForms((x) => ({
//           ...x,
//           id: o.id,
//           name:o.name,
//           title: o.title
//         }))
//       })
//     }
//   }, [forms.id])

//   return <_forms.Provider value={forms}>{children}</_forms.Provider>
// }

// export function useForms() {
//   return useContext(_forms)
// }


// // List
// const _list = createContext<ListResult>({
//   id: "",
//   date:"",
//   name:"",
//   tip:"",
//   title:"",
//   costType: "",
//   price: "",
// })

// export function ListProvider({ children }: { children: any }) {
//   const [list, setList] = useState<ListResult>({
//   id: "",
//   date:"",
//   name:"",
//   tip:"",
//   title:"",
//   costType:"",
//   price:"",
// })

//   useEffect(() => {
//     if (list.id == "") {
//       listApi.getServerList({ id: "andre" }).then((o) => {
//         setList((x) => ({
//           ...x,
//           costType: o.costType,
//           date: o.date,
//           id: o.id,
//           name: o.name,
//           price: o.price,
//           tip: o.tip,
//           title: o.title
//         }))
//       })
//     }
//   }, [list.id])

//   return <_list.Provider value={list}>{children}</_list.Provider>
// }

// export function useList() {
//   return useContext(_list)
// }


// // Location
// const _location = createContext<GetServerLocationResult>({
//   id: "",
//   name: "",
//   title: "",
// })

// export function LocationProvider({ children }: { children: any }) {
//   const [location, setLocation] = useState<GetServerLocationResult>({
//   id: "",
//   name:"",
//   title:"",
// })

//   useEffect(() => {
//     if (location.id == "") {
//       locationApi.getServerLocation({ id: "andre" }).then((o) => {
//         setLocation((x) => ({
//           ...x,
//           id: o.id,
//           name: o.name,
//           title: o.title
          
//         }))
//       })
//     }
//   }, [location.id])

//   return <_location.Provider value={location}>{children}</_location.Provider>
// }

// export function useLocation() {
//   return useContext(_location)
// }



// // Project
// const _project = createContext<Project>({
//   id: 0,
//   name: "",
//   title: "",
// })

// export function ProjectProvider({ children }: { children: any }) {
//   const [project, setProject] = useState<Project>({
//   id: 0,
//   name:"",
//   title:"",
// })

//   useEffect(() => {
//     if (project.id == 0) {
//       projectApi.getServerProject({ userId: "" }).then((o) => {
//         setProject((x) => ({
//           ...x,
//         }))
//       })
//     }
//   }, [project.id])

//   return <_project.Provider value={project}>{children}</_project.Provider>
// }

// export function useProject() {
//   return useContext(_project)
// }