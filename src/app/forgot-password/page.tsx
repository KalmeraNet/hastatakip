import { ReqLogin } from "@/components/ReqLogin"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React from "react"

type Props = {}

const ForgotFassword = (props: Props) => {
  return (
    <ReqLogin>
      {/* Header */}
      <Header title="ForgotPassword" />

      {/* Body */}
      <div>ForgotFassword</div>

      {/* Footer */}
      <Footer />
    </ReqLogin>
  )
}

export default ForgotFassword
