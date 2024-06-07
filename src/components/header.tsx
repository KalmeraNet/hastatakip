"use client"
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
import { IconChevronLeft, IconKey, IconLogout, IconUser } from "@tabler/icons-react"
import Link from "next/link"
import React, { useState } from "react"
import { signOut, auth } from '@/auth';
import { UserResult } from "@/server"
import { useUser } from "@/app/userContext"
import { useSession } from "next-auth/react"
import a from "next-auth/next"
import { getToken } from "next-auth/jwt"
import { cookies, headers } from "next/headers"



type Props = {
  title?: string
  link?: string
}

const Header = (props: Props) => {
  const { data: session, status } = useSession()

  // const user = useUser()
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
        <Link style={{ textDecoration: "none", color: "#000" }} href="/menu">
          <Image h={92} w="auto" fit="contain" src="/logo.png" alt="logo" />
        </Link>
      )}

      {session?.user && (
        <Menu shadow="md" width={200}>
          <MenuTarget>
            <Button variant="transparent" size="lg">
              <Avatar color="#6395ff" radius="xl">
                {(session?.user as any).initial}
              </Avatar>
            </Button>
          </MenuTarget>

          <MenuDropdown>
            <MenuLabel style={{ fontWeight: "bold" }}>
              {(session?.user as any).fullName}
            </MenuLabel>
            <MenuLabel>{(session?.user as any).role}</MenuLabel>

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
                  <IconUser style={{ width: rem(14), height: rem(14) }} />
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
                onClick={() => {
                  signOut({ redirectTo: '/' })
                }}
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
