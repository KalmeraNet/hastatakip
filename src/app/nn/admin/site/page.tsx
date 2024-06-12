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
  { position: 6, lastname: "C", name: "Carbon" },
  { position: 7, lastname: "N", name: "Nitrogen" },
  { position: 39, lastname: "Y", name: "Yttrium" },
  { position: 56, lastname: "Ba", name: "Barium" },
  { position: 58, lastname: "Ce", name: "Cerium" },
]

const items = [
  { title: "Menu", href: "/nn/menu" },
  { title: "Site", href: "/nn/admin/site" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))

const Site = (props: Props) => {
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
          <h1>Site</h1>
          <Stack>
            <Flex>
              <Input
                placeholder="Search for Site"
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
                title="Add Site"
              >
                <TextInput style={{ marginTop: "2rem" }} label="Add Site No" />
                <TextInput style={{ marginTop: "2rem" }} label="Add Site Name" />
                <TextInput style={{ marginTop: "2rem" }} label="Add Num/PI" />
                <Button
                  onClick={close}
                  style={{ justifyItems: "flex-end", marginTop: "2rem" }}
                >
                  Add Site
                </Button>
              </Drawer>
              <div style={{ marginLeft: "2rem" }}>
                <Button onClick={open}>Add Site</Button>
              </div>
            </Flex>

            <Table highlightOnHover styles={{ table: { width: "100%" } }}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Site No</Table.Th>
                  <Table.Th styles={{ th: { width: 0 } }} />
                  <Table.Th>Site Name</Table.Th>
                  <Table.Th>Num/PI</Table.Th>
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

export default Site
