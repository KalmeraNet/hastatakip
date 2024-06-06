import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button, Flex, PasswordInput, Text } from "@mantine/core"
import React from "react"

type Props = {}

const ChangePassword = (props: Props) => {
  // const user = useUser()
  return (
    <>
      {/* Header */}
      <Header link="/menu" />

      {/* Body */}
      <div style={{ marginBottom: "17rem" }}>
        <Flex
          style={{ padding: "1rem 0" }}
          align="center"
          justify="space-between"
        >
          <Text style={{ marginLeft: "1rem" }}>Change Password</Text>
          <Button
            style={{
              width: "100px",
              background: "#6395ff",
              marginRight: "1rem",
            }}
          >
            Save
          </Button>
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          style={{
            padding: ".5rem .8rem",
            backgroundColor: "#f3f3f3",
            borderTop: "solid #6395ff 1px",
          }}
        >
          <Text size="md" fw={500}>
            Old password:
          </Text>
          <PasswordInput
            variant="unstyled"
            placeholder="Old password"
            w={200}
          />
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          style={{
            padding: ".5rem .8rem",
            backgroundColor: "#f3f3f3",
            borderTop: "solid #6395ff 1px",
          }}
        >
          <Text size="md" fw={500}>
            New password:
          </Text>
          <PasswordInput
            variant="unstyled"
            placeholder="New password"
            w={200}
          />
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          style={{
            padding: ".5rem .8rem",
            backgroundColor: "#f3f3f3",
            borderTop: "solid #6395ff 1px",
          }}
        >
          <Text size="md" fw={500}>
            Re-enter new password:
          </Text>
          <PasswordInput
            variant="unstyled"
            placeholder="Re-enter password"
            w={200}
          />
        </Flex>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "8rem" }}>
        <Footer />
      </div>
    </>
  )
}

export default ChangePassword
