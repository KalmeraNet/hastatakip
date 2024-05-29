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

type Props = {}

const elements = [
  { position: 6, lastname: "C", name: "Carbon", icon: "C6" },
  { position: 7, lastname: "N", name: "Nitrogen", icon: "N7" },
  { position: 39, lastname: "Y", name: "Yttrium", icon: "Y39" },
  { position: 56, lastname: "Ba", name: "Barium", icon: "Ba56" },
  { position: 58, lastname: "Ce", name: "Cerium", icon: "Ce58" },
]

const items = [
  { title: "Menu", href: "/admin/menu" },
  { title: "PI", href: "/admin/admin/pi" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))
const PI = (props: Props) => {
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
            <Table.Td>{element.icon}</Table.Td>
          </Table.Tr>
        ))
    )
  }, [search])

  return (
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
        <h1>PI</h1>
        <Stack>
          <Flex>
            <Input
              placeholder="Search for PI"
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
              title="Add PI"
            >
              <TextInput style={{ marginTop: "2rem" }} label="Add PI No" />
              <TextInput style={{ marginTop: "2rem" }} label="Add PI Name" />
              <TextInput style={{ marginTop: "2rem" }} label="Add PI Email" />
              <TextInput style={{ marginTop: "2rem" }} label="Add PI Cod" />
              <Button
                onClick={close}
                style={{ justifyItems: "flex-end", marginTop: "2rem" }}
              >
                Add PI
              </Button>
            </Drawer>
            <div style={{ marginLeft: "2rem" }}>
              <Button onClick={open}>Add PI</Button>
            </div>
          </Flex>

          <Table highlightOnHover styles={{ table: { width: "100%" } }}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>PI No</Table.Th>
                <Table.Th styles={{ th: { width: 0 } }} />
                <Table.Th>PI Name</Table.Th>
                <Table.Th>PI Project</Table.Th>
                <Table.Th>PI Code</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{data}</Table.Tbody>
          </Table>
        </Stack>
      </AppShell.Main>

      {/* Footer */}
    </AppShell>
  )
}

export default PI
