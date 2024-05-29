"use client"
import AdminHeader from "@/components/adminHeader"
import AdminNavbar from "@/components/adminNavbar"
import { AppShell, Avatar, Flex } from "@mantine/core"
import React from "react"

type Props = {}

const AdminSide = (props: Props) => {
  return (
    <AppShell>
      {/* Header */}
      <AdminHeader />

      {/* Navbar */}
      <AdminNavbar />

      {/* Main */}
      <AppShell.Main>
        <Flex align="center">
          <Avatar color="#6395ff" radius="xl" style={{ marginRight: "1rem" }} />
          <h1>Name - Surname</h1>
        </Flex>
      </AppShell.Main>
    </AppShell>
  )
}

export default AdminSide
