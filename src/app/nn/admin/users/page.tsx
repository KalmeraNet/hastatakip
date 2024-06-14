"use client"
import React, { useEffect, useState } from "react"
import AdminHeader from "@/components/adminHeader"
import AdminNavbar from "@/components/adminNavbar"
import { useDisclosure } from "@mantine/hooks"
import {
  Drawer,
  Button,
  TextInput,
  Stack,
  Flex,
  Menu,
  rem,
  Breadcrumbs,
  Anchor,
} from "@mantine/core"
import {
  IconDotsVertical,
  IconEdit,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react"
import { AppShell, Table, Input } from "@mantine/core"
import { ReqLogin } from "@/components/ReqLogin"

type Props = {}

const elements = [
  { position: 6, lastname: "Arslan", name: "Canan", email: "canan.arslan@example.com", type: "SC", trial: "EX6018-4758" },
  { position: 7, lastname: "Doğan", name: "Ömer", email: "omer.dogan@example.com", type: "CRO", trial: "EX6018-4758" },
  { position: 39, lastname: "Polat", name: "Selin ", email: "selin.polat@example.com", type: "CRO", trial: "EX6018-4915" },
  { position: 56, lastname: "Koç", name: "Kerem", email: "kerem.koc@example.com", type: "Patient", trial: "EX6018-4758" },
  { position: 58, lastname: "Türkmen", name: "Buse", email: "buse.turkmen@example.com", type: "Patient", trial: "EX6018-4979" },
]

const items = [
  { title: "Menu", href: "/nn/menu" },
  { title: "Users", href: "/nn/admin/users" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))

const Users = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false)
  const [search, setSearch] = useState("")
  const [data, setData] = useState<React.JSX.Element[]>([])
  useEffect(() => {
    setData(
      elements
        .filter((a) => a.name.indexOf(search) != -1 || search == "")
        .map((element) => (
          <Table.Tr
            key={element.name}
            onClick={(e) => {
              alert("Please Edit")
            }}
          >
            <Table.Td>{element.position}</Table.Td>
            <Table.Td>
              <div style={{ whiteSpace: "nowrap" }}>
                <Menu position="left" offset={2} withArrow>
                  <Menu.Target>
                    <Button
                      size="xs"
                      variant="transparent"
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      <Flex direction="column">
                        <IconDotsVertical style={{ color: "#969696" }} />
                      </Flex>
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item
                      color="#000"
                      leftSection={
                        <IconEdit style={{ width: rem(14), height: rem(14) }} />
                      }
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      color="red"
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                      leftSection={
                        <IconTrash
                          style={{ width: rem(14), height: rem(14) }}
                        />
                      }
                    >
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.lastname}</Table.Td>
            <Table.Td>{element.email}</Table.Td>
            <Table.Td>{element.type}</Table.Td>
            <Table.Td>{element.trial}</Table.Td>
          </Table.Tr>
        ))
    )
  }, [search])
  return (

    <ReqLogin>
      <AppShell>
        {/* Header */}
        <AdminHeader />

        {/* Navbar */}
        <AdminNavbar />

        {/* Body */}
        <AppShell.Main>
          <Breadcrumbs separator=">" separatorMargin="md" mt="xs">
            {items}
          </Breadcrumbs>
          <h1>Users</h1>
          <Stack>
            <Flex>
              <Input
                placeholder="Search for Users"
                rightSection={<IconSearch />}
                style={{ height: "auto", width: "100%" }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
              />
              <Drawer
                opened={opened}
                onClose={close}
                position="right"
                title="Add Users"
              >
                <TextInput style={{ marginTop: "1rem" }} label="Add Users No" />
                <TextInput style={{ marginTop: "2rem" }} label="Add Users Name" />
                <TextInput
                  style={{ marginTop: "2rem" }}
                  label="Add Users Lastname"
                />
                <TextInput
                  style={{ marginTop: "2rem" }}
                  label="Add Users Email"
                />
                <TextInput style={{ marginTop: "2rem" }} label="Add Users Type" />
                <TextInput
                  style={{ marginTop: "2rem" }}
                  label="Add Users Trial"
                />
                <Button
                  onClick={close}
                  style={{ justifyItems: "flex-end", marginTop: "2rem" }}
                >
                  Add Users
                </Button>
              </Drawer>
              <div style={{ marginLeft: "2rem" }}>
                <Button onClick={open}>Add Users</Button>
              </div>
            </Flex>

            <Table highlightOnHover styles={{ table: { width: "100%" } }}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>No</Table.Th>
                  <Table.Th styles={{ th: { width: 0 } }} />
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Lastname</Table.Th>
                  <Table.Th>Email</Table.Th>
                  <Table.Th>Type</Table.Th>
                  <Table.Th>Trial</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{data}</Table.Tbody>
            </Table>
          </Stack>
        </AppShell.Main>

        {/* Footer */}
      </AppShell>
    </ReqLogin>
  )
}

export default Users
