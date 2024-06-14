import { ReqLogin } from "@/components/ReqLogin"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Flex } from "@mantine/core"
import { IconChevronLeft } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"

type Props = {}

const ForgotFassword = (props: Props) => {
  return (
    <ReqLogin>
      {/* Header */}<Flex
        justify="space-between"
        align="center"
        style={{ padding: "0 1.2rem", backgroundColor: "#ccc" }}
      >
        <Link href="/">
          <IconChevronLeft
            style={{
              color: "#000",
              textDecoration: "none",
              marginTop: ".5rem",
            }}
          />
        </Link>
        <h1>Forgot Password</h1>
      </Flex>

      {/* Body */}
      <div>Forgot Password</div>

      {/* Footer */}
      <Footer />
    </ReqLogin>
  )
}

export default ForgotFassword
