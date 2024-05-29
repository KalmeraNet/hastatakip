"use client"
import CroHeader from "@/components/croHeader"
import CroNavbar from "@/components/croNavbar"
import { AppShell } from "@mantine/core"
import React from "react"

type Props = {}

const CroChangePassword = (props: Props) => {
  return (
    <AppShell>
      {/* Header */}
      <CroHeader />

      {/* Navbar */}
      <CroNavbar />

      <AppShell.Main>ChangePassword</AppShell.Main>
    </AppShell>
  )
}

export default CroChangePassword
