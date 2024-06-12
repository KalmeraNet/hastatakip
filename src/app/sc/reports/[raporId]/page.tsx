import { ReqLogin } from "@/components/ReqLogin"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React from "react"

type Props = {}

const RaporConvert = (props: Props) => {
  return (
    <ReqLogin>
      {/* Header */}
      <Header link="/sc/reports" />

      {/* Body */}

      <h1>JSON To Excel Convert...</h1>

      {/* Footer */}
      <div style={{ marginTop: "8rem" }}>
        <Footer />
      </div>
    </ReqLogin>
  )
}

export default RaporConvert
