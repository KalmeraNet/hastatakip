import Footer from "@/components/footer"
import Header from "@/components/header"
import React from "react"

type Props = {}

const RaporConvert = (props: Props) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body */}
      <>
        <h1>JSON To Excel Convert...</h1>
      </>

      {/* Footer */}
      <div style={{ marginTop: "8rem" }}>
        <Footer />
      </div>
    </>
  )
}

export default RaporConvert
