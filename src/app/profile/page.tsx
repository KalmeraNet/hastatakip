import Footer from "@/components/footer"
import Header from "@/components/header"
import React from "react"

type Props = {}

const Profile = (props: Props) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body */}
      <h1>Name Surname</h1>

      {/* Footer */}
      <div style={{ marginTop: "1rem" }}>
        <Footer />
      </div>
    </>
  )
}

export default Profile
