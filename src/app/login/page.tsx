"use client"
import Footer from "@/components/footer"
import { Flex, PasswordInput, Button, TextInput, Text } from "@mantine/core"
import Link from "next/link"
import React from "react"
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

type Props = {}

const Login = (props: Props) => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  return (
    <>
      {/* Header */}
       <Flex
      justify="space-between"
      align="center"
      style={{ padding: "0 1.2rem", backgroundColor: "#ccc" }}
    >
      <h1>Login</h1>
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
              margin: "35px 20px 35px 20px",
              maxWidth: "28rem",
            }}
          >
            <h1 style={{ fontSize: "1.5rem" }}>Login to Your Account</h1>
            {errorMessage && (
              <>
                <p>{errorMessage}</p>
              </>
            )}
            <form action={dispatch}>
            <div>
              <TextInput
                label="E-Mail"
                placeholder="E-Mail"
                id="email"
                name="email"
                style={{ marginBottom: "2rem", fontSize: "16pt" }}
              />
            </div>
            <div>
              <PasswordInput
                label="Password"
                placeholder="Password"
                id="password"
                name="password"
                style={{ marginBottom: "2rem", fontSize: "16pt" }}
              />
            </div>
              <Button type="submit"
                fullWidth
                variant="filled"
                color="indigo"
                disabled={pending}
                style={{ marginBottom: "1.5rem" }}
              >
                Login
              </Button>
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
            </form>
          </div>
        </Flex>
      </Flex>

      <Footer />
    </>
  )
}

export default Login
