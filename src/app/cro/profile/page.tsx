"use client"
import CroHeader from "@/components/croHeader"
import CroNavbar from "@/components/croNavbar"
import { AppShell } from "@mantine/core"
import React from "react"

type Props = {}

const ScProfile = (props: Props) => {
  return (
    <AppShell>
      {/* Header */}
      <CroHeader />

      {/* Navbar */}
      <CroNavbar />

      {/* Main */}
      <AppShell.Main>
        <h1>Names - Surname</h1>
      </AppShell.Main>
    </AppShell>
  )
}

export default ScProfile