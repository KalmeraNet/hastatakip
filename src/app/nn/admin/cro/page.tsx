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
  {
    position: 6, lastname: "zeynep.ozcan@example.com", name: "Zeynep Özcan", icon: "C6"
  },
  {
    position: 7, lastname: "ali.celik@example.com", name: "Ali Çelik", icon: "N7"
  },
  {
    position: 39, lastname: "ayse.yildirim@example.com", name: "Ayşe Yıldırım", icon: "Y39"
  },
  {
    position: 56, lastname: "emre.kilic@example.com", name: "Emre Kılıç", icon: "Ba56"
  },
  {
    position: 58, lastname: "hulya.aksoy@example.com", name: "Hülya Aksoy", icon: "Ce58"
  },
]


const items = [
  { title: "Menu", href: "/nn/menu" },
  { title: "CRO", href: "/nn/admin/cro" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))

const CRO = (props: Props) => {
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
          <h1>Clinical Research Organization</h1>
          <Stack>
            <Flex>
              <Input
                placeholder="Search for CRO"
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
                title="Add CRO"
              >
                <TextInput style={{ marginTop: "2rem" }} label="Add No" />
                <TextInput style={{ marginTop: "2rem" }} label="Add CRO Name" />
                <TextInput style={{ marginTop: "2rem" }} label="Add CRO Email" />
                <TextInput style={{ marginTop: "2rem" }} label="Add CRO Cod" />
                <Button
                  onClick={close}
                  style={{ justifyItems: "flex-end", marginTop: "2rem" }}
                >
                  Add CRO
                </Button>
              </Drawer>
              <div style={{ marginLeft: "2rem" }}>
                <Button onClick={open}>Add CRO</Button>
              </div>
            </Flex>

            <Table highlightOnHover styles={{ table: { width: "100%" } }}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>No</Table.Th>
                  <Table.Th styles={{ th: { width: 0 } }} />
                  <Table.Th>CRO Name</Table.Th>
                  <Table.Th>CRO Email</Table.Th>
                  <Table.Th>CRO Code</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{data}</Table.Tbody>
            </Table>
          </Stack>
        </AppShell.Main>
      </AppShell>
    </ReqLogin>
  )
}

export default CRO
