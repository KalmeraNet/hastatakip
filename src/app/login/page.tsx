import Footer from "@/components/footer"
import Header from "@/components/header"
import { Flex, PasswordInput, Button, TextInput, Text } from "@mantine/core"
import Link from "next/link"
import React from "react"

type Props = {}

const Login = (props: Props) => {
  {
    return (
      <>
        {/* Header */}
        <Header title="Login" key="id" />

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
                margin: "35px 20px 35px 20px",
                maxWidth: "28rem",
              }}
            >
              <h1 style={{ fontSize: "1.5rem" }}>Login to Your Account</h1>
              <div>
                <TextInput
                  label="E-Mail"
                  placeholder="E-Mail"
                  style={{ marginBottom: "2rem", fontSize: "16pt" }}
                />
              </div>
              <div>
                <PasswordInput
                  label="Password"
                  placeholder="Password"
                  style={{ marginBottom: "2rem", fontSize: "16pt" }}
                />
              </div>
              <Link href="/">
                <Button
                  fullWidth
                  variant="filled"
                  color="indigo"
                  style={{ marginBottom: "1.5rem" }}
                >
                  Login
                </Button>
              </Link>
              <Link
                href="/forgot-password"
                style={{
                  textAlign: "end",
                  justifyItems: "center",
                  border: "none",
                  marginBottom: ".5rem",
                  textDecoration: "none",
                  color: "indigo",
                }}
              >
                <Text style={{ textDecoration: "none", color: "#506bff" }}>
                  Forgot Password ?
                </Text>
              </Link>
            </div>
          </Flex>
        </Flex>

        {/* Footer */}
        <Footer />
      </>
    )
  }
}

export default Login
