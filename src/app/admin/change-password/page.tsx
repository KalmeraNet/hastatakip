"use client"
import AdminHeader from "@/components/adminHeader"
import AdminNavbar from "@/components/adminNavbar"
import { AppShell } from "@mantine/core"
import React from "react"

type Props = {}

const page = (props: Props) => {
  return (
    <AppShell>
      {/* Header */}
      <AdminHeader />

      {/* Navbar */}
      <AdminNavbar />

      <AppShell.Main>ChangePassword</AppShell.Main>
    </AppShell>
  )
}

export default page
