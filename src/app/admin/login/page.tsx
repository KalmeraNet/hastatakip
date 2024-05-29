"use client"
import AdminHeader from "@/components/adminHeader"
import {
  AppShell,
  Button,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core"
import Link from "next/link"
import React from "react"

type Props = {}

const AdminLogin = (props: Props) => {
  return (
    <AppShell>
      {/* Header */}
      <AdminHeader />

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
              padding: "70px",
              border: "solid #ccc 1px",
              margin: "145px 20px 35px 20px",
              maxWidth: "28rem",
            }}
          >
            <h1 style={{ fontSize: "1.5rem" }}>Login to Your Account</h1>
            <div>
              <TextInput
                label="E-Mail"
                placeholder="E-Mail"
                style={{ marginBottom: "1.5rem", fontSize: "16pt" }}
              />
            </div>
            <div>
              <PasswordInput
                label="Password"
                placeholder="Password"
                style={{ marginBottom: "2.5rem", fontSize: "16pt" }}
              />
            </div>
            <Link href="/admin/menu">
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
              href="/admin/forgot-password"
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
    </AppShell>
  )
}

export default AdminLogin
