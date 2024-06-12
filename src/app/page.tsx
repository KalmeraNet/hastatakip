"use client"
import { Button, Flex, Image, Text } from "@mantine/core"
import { signIn } from "next-auth/react"
import { useUser } from "./userContext"


type Props = {}

const MenuControl = (props: Props) => {
  const user = useUser()

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

        {!user && <Button
          onClick={() => {
            signIn()
          }
          }
          fullWidth
          w={240}
          variant="filled"
          color="indigo"
          style={{ marginTop: '4rem' }}
        >
          Login
        </Button>}
        {user && <Button onClick={() => {
          window.location.href = '/sc/menu'
        }}
          fullWidth
          w={240}
          variant="filled"
          color="indigo"
          style={{ marginTop: '5rem' }}

        >Goto SC Menu</Button>}
        {user && <Button onClick={() => {
          window.location.href = '/admin/menu'
        }}
          fullWidth
          w={240}
          variant="filled"
          color="indigo"
          style={{ marginTop: '2rem' }}

        >Goto Admin Menu</Button>}
        {user && <Button onClick={() => {
          window.location.href = '/cro/menu'
        }}
          fullWidth
          w={240}
          variant="filled"
          color="indigo"
          style={{ marginTop: '2rem' }}

        >Goto CRO Menu</Button>}
      </Flex>
    </>
  )
}


export default MenuControl
