"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import MenuButton from "@/components/menuButton"
import { Flex } from "@mantine/core"

type Props = {}

const MenuControl = (props: Props) => {
  return (
    <>
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
    </>
  )
}

export default MenuControl
