import { AppShell, NavLink } from "@mantine/core"
import React from "react"

type Props = {}

const AdminNavbar = (props: Props) => {
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
          <NavLink label="Menu" href="/nn/menu" />
          <NavLink label="Cost" href="/nn/cost" />
          <NavLink label="Admin" childrenOffset={38} defaultOpened>
            <NavLink label="Trial" href="/nn/admin/trial" />
            <NavLink label="Site" href="/nn/admin/site" />
            <NavLink label="CRO" href="/nn/admin/cro" />
            <NavLink label="PI" href="/nn/admin/pi" />
            <NavLink label="Users" href="/nn/admin/users" />
          </NavLink>
        </AppShell.Navbar>
      </AppShell>
    </>
  )
}

export default AdminNavbar
