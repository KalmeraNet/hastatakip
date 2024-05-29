"use client"
import { useUser } from "@/server/userContext"
import {
  Avatar,
  Button,
  Flex,
  Image,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  rem,
} from "@mantine/core"
import { IconChevronLeft, IconKey, IconLogout } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"

type Props = {
  title?: string
  link?: string
}

const Header = (props: Props) => {
  const user = useUser()
  return (
    <Flex
      justify="space-between"
      align="center"
      style={{ padding: "0 1.2rem", backgroundColor: "#ccc" }}
    >
      {props.link && (
        <>
          <Link href={props.link}>
            <IconChevronLeft
              style={{
                color: "#000",
                textDecoration: "none",
                marginTop: ".5rem",
              }}
            />
          </Link>
        </>
      )}
      {props.title && <h1>{props.title}</h1>}
      {!props.title && (
        <Link style={{ textDecoration: "none", color: "#000" }} href="/">
          <Image h={92} w="auto" fit="contain" src="/logo.png" alt="logo" />
        </Link>
      )}

      {user && (
        <Menu shadow="md" width={200}>
          <MenuTarget>
            <Button variant="transparent" size="lg">
              <Avatar color="#6395ff" radius="xl">
                {user.initial}
              </Avatar>
            </Button>
          </MenuTarget>

          <MenuDropdown>
            <MenuLabel style={{ fontWeight: "bold" }}>
              {user.fullName}
            </MenuLabel>
            <MenuLabel>{user.role}</MenuLabel>

            <MenuDivider />

            <Link href="/change-password" style={{ textDecoration: "none" }}>
              <MenuItem
                leftSection={
                  <IconKey style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Change Password
              </MenuItem>
            </Link>

            <Link href="/profile" style={{ textDecoration: "none" }}>
              <MenuItem
                leftSection={
                  <IconKey style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Profile
              </MenuItem>
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
          </MenuDropdown>
        </Menu>
      )}
    </Flex>
  )
}

export default Header
