"use client"
import {
  AppShell,
  Avatar,
  Button,
  Flex,
  Image,
  Menu,
  MenuItem,
  MenuTarget,
  rem,
} from "@mantine/core"
import { IconKey, IconLogout, IconUser } from "@tabler/icons-react"
import Link from "next/link"
import { useUser } from "@/app/userContext"
import React from "react"

type Props = {}

const AdminHeader = (props: Props) => {
  const user = useUser()

  return (
    <AppShell
      header={{ height: 93 }}
      navbar={{
        width: 200,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex
          justify="space-between"
          align="center"
          style={{ padding: "0 3rem", backgroundColor: "#ccc" }}
        >
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            href="/nn/menu"
          >
            <Image h={92} src="/logo.png" alt="logo" />
          </Link>

          {user && (
            <Menu shadow="md" width={200}>
              <MenuTarget>
                <Button variant="transparent" size="lg">
                  <Avatar color="#6395ff" radius="xl">
                    {user.initial}
                  </Avatar>
                </Button>
              </MenuTarget>

              <Menu.Dropdown>
                <Menu.Label style={{ fontWeight: "bold" }}>
                  {user.fullName}
                </Menu.Label>
                <Menu.Label>{user.role}</Menu.Label>

                <Menu.Divider />

                <Link
                  href="/change-password"
                  style={{ textDecoration: "none" }}
                >
                  <Menu.Item
                    leftSection={
                      <IconKey style={{ width: rem(14), height: rem(14) }} />
                    }
                  >
                    Change Password
                  </Menu.Item>
                </Link>

                <Link href="/admin/profile" style={{ textDecoration: "none" }}>
                  <Menu.Item
                    leftSection={
                      <IconUser style={{ width: rem(14), height: rem(14) }} />
                    }
                  >
                    Profile
                  </Menu.Item>
                </Link>

                <Link href="/login" style={{ textDecoration: "none" }}>
                  <MenuItem
                    color="red"
                    leftSection={
                      <IconLogout style={{ width: rem(14), height: rem(14) }} />
                    }
                  >
                    Logout
                  </MenuItem>
                </Link>
              </Menu.Dropdown>
            </Menu>
          )}
        </Flex>
      </AppShell.Header>
    </AppShell>
  )
}

export default AdminHeader
