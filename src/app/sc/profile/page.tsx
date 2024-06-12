import { ReqLogin } from "@/components/ReqLogin"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React from "react"

type Props = {}

const Profile = (props: Props) => {
  return (
    <ReqLogin>
      {/* Header */}
      <Header />

      {/* Body */}
      <h1>Name Surname</h1>

      {/* Footer */}
      <div style={{ marginTop: "1rem" }}>
        <Footer />
      </div>
    </ReqLogin>
  )
}

export default Profile
