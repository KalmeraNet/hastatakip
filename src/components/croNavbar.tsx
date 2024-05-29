"use client"
import { AppShell, NavLink } from "@mantine/core"
import React from "react"

type Props = {}

const CroNavbar = (props: Props) => {
  return (
    <>
      <AppShell
        header={{ height: 93 }}
        navbar={{
          width: 200,
          breakpoint: "sm",
        }}
        padding="md"
      >
        <AppShell.Navbar style={{ padding: ".5rem", paddingTop: "1rem" }}>
          <NavLink label="Menu" href="/cro/menu" />
          <NavLink label="Cost" href="/cro/cost" />
          <NavLink label="Side Coordinator" href="/cro/sc" />
          {/* <NavLink label="Admin" childrenOffset={38} defaultOpened>
            <NavLink label="Trial" href="/cro/cro/trial" />
            <NavLink label="Site" href="/cro/cro/site" />
            <NavLink label="CRO" href="/cro/cro/cro" />
            <NavLink label="PI" href="/cro/cro/pi" />
            <NavLink label="Users" href="/cro/cro/users" />
          </NavLink> */}
        </AppShell.Navbar>
      </AppShell>
    </>
  )
}

export default CroNavbar
