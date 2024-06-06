import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button, Flex, PasswordInput, Text } from "@mantine/core"
import React from "react"

type Props = {}

const Confirmation = (props: Props) => {
  return (
    <>
      {/* Header */}<Flex
      justify="space-between"
      align="center"
      style={{ padding: "0 1.2rem", backgroundColor: "#ccc" }}
    >
      <h1>Confirmation</h1>
    </Flex>

      {/* Body */}
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{ height: "100dh" }}
      >
        <Flex
          align="center"
          justify="center"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              padding: "40px",
              border: "solid #ccc 1px",
              margin: "35px 25px 40px 25px",
              maxWidth: "28rem",
            }}
          >
            <Text>Welcome Name-Surname</Text>
            <h1 style={{ fontSize: "1.5rem", marginTop: ".2rem" }}>
              Confirmation Page
            </h1>

            <div>
              <PasswordInput
                label="New Password"
                placeholder="New password"
                style={{ marginBottom: "2rem", fontSize: "16pt" }}
              />
            </div>
            <div>
              <PasswordInput
                label=" Re-enter New Password:"
                placeholder="Re-enter Password"
                style={{ marginBottom: "3rem", fontSize: "16pt" }}
              />
            </div>
              <Button
                fullWidth
                variant="filled"
                color="indigo"
                style={{ marginBottom: "1.5rem" }}
              >
                Login
              </Button>
          </div>
        </Flex>
      </Flex>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Confirmation
