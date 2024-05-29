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
          <NavLink label="Menu" href="/admin/menu" />
          <NavLink label="Cost" href="/admin/cost" />
          <NavLink label="Admin" childrenOffset={38} defaultOpened>
            <NavLink label="Trial" href="/admin/admin/trial" />
            <NavLink label="Site" href="/admin/admin/site" />
            <NavLink label="CRO" href="/admin/admin/cro" />
            <NavLink label="PI" href="/admin/admin/pi" />
            <NavLink label="Users" href="/admin/admin/users" />
          </NavLink>
        </AppShell.Navbar>
      </AppShell>
    </>
  )
}

export default AdminNavbar
