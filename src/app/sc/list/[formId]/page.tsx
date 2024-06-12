"use client"
import Footer from "@/components/footer"
import FormItem from "@/components/items/formItem"
import Header from "@/components/header"
import React, { useEffect, useState } from "react"
import { FormResult, formApi } from "@/server"
import { useUser } from "@/app/userContext"
import { ReqLogin } from "@/components/ReqLogin"

/*
Form
FormItem 
GetFormOutputParam
*/

type Props = { params: { formId: string } }

const Forms = (props: Props) => {
  const [form, setForm] = useState<FormResult>()
  const user = useUser()
  useEffect(() => {
    formApi.getServerForm({
      id: parseInt("0" + props.params.formId, 10),
    }).then((data) => {
      setForm(data)
    })
  }, [user?.id, props.params.formId])

  return (
    <ReqLogin>
      {/* Header */}
      <Header title="FormName" link="/sc/list" />

      {/* Body */}

      {form && (
        <FormItem
          key={form.id}
          id={form.id ?? 0}
          firstLine={form.name ?? ""}
          secondLine={form.title ?? ""}
          thirdLine={form.tip ?? ""}
          po={form.po ?? ""}
          price={form.price ?? 0}
          date={form.date ?? ""}
        />
      )}


      {/* Footer */}
      <div style={{ marginTop: "8rem" }}>
        <Footer />
      </div>
    </ReqLogin>
  )
}

export default Forms
