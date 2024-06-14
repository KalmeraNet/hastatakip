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

type Props = {}

const elements = [
  { study: "EX2211-3748", site: "721", patient: "null", type: "Accomidation", amount: "2500", date: "12.02.24", status: "Active" },
  { study: "EX2211-3748", site: "722", patient: "null", type: "Transportation", amount: "600", date: "02.03.24", status: "Active" },
  { study: "EX6018-4758", site: "860", patient: "null", type: "Transportation", amount: "1800", date: "01.06.24", status: "Active" },
  { study: "EX6018-4915", site: "8400", patient: "null", type: "FB", amount: "400", date: "24.04.24", status: "Active" },
  { study: "EX6018-4979", site: "3700", patient: "null", type: "FB", amount: "800", date: "15.02.24", status: "Active" },
]

const items = [
  { title: "Menu", href: "/nn/menu" },
  { title: "Costs", href: "/nn/admin/cost" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))

const AdminCost = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false)
  const [search, setSearch] = useState("")
  const [data, setData] = useState<React.JSX.Element[]>([])
  useEffect(() => {
    setData(
      elements
        .filter((a) => a.study.indexOf(search) != -1 || search == "")
        .map((element) => (
          <Table.Tr
            key={element.study}
            onClick={open}
          >
            <Table.Td>{element.study}</Table.Td>
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
            <Table.Td>{element.site}</Table.Td>
            <Table.Td>{element.patient}</Table.Td>
            <Table.Td>{element.type}</Table.Td>
            <Table.Td>{element.amount} TL</Table.Td>
            <Table.Td>{element.date}</Table.Td>
            <Table.Td>{element.status}</Table.Td>
          </Table.Tr>
        ))
    )
  }, [open, search])

  return (
    <>
      {/* Body */}
      <AppShell.Main>
        <Breadcrumbs separator=">" separatorMargin="md" mt="xs">
          {items}
        </Breadcrumbs>
        <h1>Costs</h1>
        <Stack>
          <Flex>
            <Input
              placeholder="Search for Cost"
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
              title="Add Cost"
            >
              <TextInput style={{ marginTop: "2rem" }} label="Study Name" />
              <TextInput style={{ marginTop: "2rem" }} label="Site Name" />
              <TextInput style={{ marginTop: "2rem" }} label="Patient Num" />
              <TextInput style={{ marginTop: "2rem" }} label="Type" />
              <TextInput style={{ marginTop: "2rem" }} label="Amount" />
              <TextInput style={{ marginTop: "2rem" }} label="Status" />
              <Button
                onClick={close}
                style={{ justifyItems: "flex-end", marginTop: "2rem" }}
              >
                Add Cost
              </Button>
            </Drawer>
            <div style={{ marginLeft: "2rem" }}>
              <Button onClick={open}>Add Cost</Button>
            </div>
          </Flex>

          <Table highlightOnHover styles={{ table: { width: "100%" } }}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Study Name</Table.Th>
                <Table.Th styles={{ th: { width: 0 } }} />
                <Table.Th>Site Name</Table.Th>
                <Table.Th>Patient Num</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{data}</Table.Tbody>
          </Table>
        </Stack>
      </AppShell.Main>
    </>
  )
}

export default AdminCost
