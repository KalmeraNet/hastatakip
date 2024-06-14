import { ReqLogin } from "@/components/ReqLogin"
import Footer from "@/components/footer"
import { Button, Flex, PasswordInput, Text } from "@mantine/core"
import { IconChevronLeft } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"

type Props = {}

const ChangePassword = (props: Props) => {
  // const user = useUser()
  return (
    <ReqLogin>
      {/* Header */}
      <Flex
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
        <h1>Change Password</h1>
      </Flex>


      {/* Body */}
      <div style={{ marginBottom: "17rem" }}>
        <Flex
          style={{ padding: "1rem 0" }}
          align="center"
          justify="space-between"
        >
          <Text style={{ marginLeft: "1rem" }}>Change Password</Text>
          <Link href="/">
            <Button
              style={{
                width: "100px",
                background: "#6395ff",
                marginRight: "1rem",
              }}
            >
              Save
            </Button>
          </Link>
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
    </ReqLogin>
  )
}

export default ChangePassword
