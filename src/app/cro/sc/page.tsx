"use client"
import React, { useEffect, useState } from "react"
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
import CroHeader from "@/components/croHeader"
import CroNavbar from "@/components/croNavbar"
import { ReqLogin } from "@/components/ReqLogin"

type Props = {}

const elements = [
  {
    position: 6, lastname: " ahmet.yilmaz@example.com", name: "Ahmet Yılmaz", icon: "C6"
  },
  {
    position: 7, lastname: "elif.demir@example.com", name: "Elif Demir", icon: "N7"
  },
  { position: 39, lastname: "mehmet.kaya@example.com", name: "Mehmet Kaya", icon: "Y39" },
  {
    position: 56, lastname: "fatma.aydin@example.com", name: "Fatma Aydın", icon: "Ba56"
  },
  {
    position: 58, lastname: "mustafa.sahin@example.com", name: "Mustafa Şahin", icon: "Ce58"
  },
]

const items = [
  { title: "Menu", href: "/cro/menu" },
  { title: "Site Coordinators", href: "/cro/sc" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))

const CroSc = (props: Props) => {
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
        <CroHeader />

        {/* Navbar */}
        <CroNavbar />

        {/* Main */}
        <AppShell.Main>
          <Breadcrumbs separator=">" separatorMargin="md" mt="xs">
            {items}
          </Breadcrumbs>
          <h1>Site Coordinators</h1>
          <Stack>
            <Flex>
              <Input
                placeholder="Search for SC"
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
                title="Add SC"
              >
                <TextInput style={{ marginTop: "2rem" }} label="Add No" />
                <TextInput style={{ marginTop: "2rem" }} label="Add Name" />
                <TextInput style={{ marginTop: "2rem" }} label="Add Email" />
                <TextInput style={{ marginTop: "2rem" }} label="Add Cod" />
                <Button
                  onClick={close}
                  style={{ justifyItems: "flex-end", marginTop: "2rem" }}
                >
                  Add SC
                </Button>
              </Drawer>
              <div style={{ marginLeft: "2rem" }}>
                <Button onClick={open}>Add SC</Button>
              </div>
            </Flex>

            <Table highlightOnHover styles={{ table: { width: "100%" } }}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>No</Table.Th>
                  <Table.Th styles={{ th: { width: 0 } }} />
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Email</Table.Th>
                  <Table.Th>Code</Table.Th>
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

export default CroSc
