"use client"
import Footer from "@/components/footer"
import FormItem from "@/components/items/formItem"
import Header from "@/components/header"
import React, { useEffect, useState } from "react"
import { FormResult, formApi } from "@/server"
import { useUser } from "@/server/userContext"

/*
Form
FormItem 
GetFormOutputParam
*/

type Props = { params: { formId: string } }

const Forms = (props: Props) => {
  const [form, setForm] = useState<FormResult[]>([])
  const user = useUser()
  useEffect(() => {
    formApi.getServerForm({
      id: parseInt("0" + props.params.formId, 10),
    }).then((data) => {
      setForm(data)
    })
  }, [user.id, props.params.formId])

  return (
    <>
      {/* Header */}
      <Header title="FormName" link="/list" />

      {/* Body */}
      <>
        {form && (
          <FormItem
            key={form.id}
            id={form.id}
            firstLine={form.name}
            secondLine={form.title}
            thirdLine={form.tip}
            po={form.po}
            price={form.price}
            date={form.date}
          />
        )}
      </>

      {/* Footer */}
      <div style={{ marginTop: "8rem" }}>
        <Footer />
      </div>
    </>
  )
}

export default Forms
