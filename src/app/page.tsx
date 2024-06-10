"use client"
import { Button, Flex, Image, Text } from "@mantine/core"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

type Props = {}

const MenuControl = (props: Props) => {
  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{ height: "100dh" }}
      >
        <Image h={12} w="15rem" fit="contain" src="/logo.png" alt="logo" style={{ marginTop: "5rem" }} />
        <Text size="xl" fw={500}>Welcome to Novo Nordisk</Text>
        <Text size="md" >Press Button to Login</Text>

        <Button
          onClick={() => {
            signIn()
          }
          }
          fullWidth
          w={240}
          variant="filled"
          color="indigo"
        >
          Login
        </Button>

      </Flex>
    </>
  )
}

export default MenuControl
