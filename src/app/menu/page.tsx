"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import MenuButton from "@/components/menuButton"
import { Flex } from "@mantine/core"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect, useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react"
import { ReqLogin } from "@/components/ReqLogin"

type Props = {}

const MenuControl = (props: Props) => {
  return (
    <ReqLogin>
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{ height: "100dh" }}
      >
        <div
          style={{
            height: "80px",
            width: "100%",
            backgroundColor: "#f3f3f3",
          }}
        >
          {/* Header */}
          <Header />
        </div>

        {/* Body */}
        <MenuButton />

        {/* Footer */}
        <Footer />
      </Flex>
    </ReqLogin>
  )
}

export default MenuControl
