"use client"
import React, { useEffect, useState } from "react"
import AdminHeader from "@/components/adminHeader"
import AdminNavbar from "@/components/adminNavbar"
import { Button, Stack, Flex, Menu, rem, Grid, Text } from "@mantine/core"
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react"
import { AppShell, Table } from "@mantine/core"
import { ReqLogin } from "@/components/ReqLogin"

type Props = {}

const elements = [
  { study: 6, site: "C@gmail.com", patient: "Carbon", type: "C6", amount: "100", date: "12.06.24", status: "Active" },
  { study: 7, site: "N@gmail.com", patient: "Nitrogen", type: "N7", amount: "100", date: "12.06.24", status: "Active" },
  { study: 39, site: "Y@gmail.com", patient: "Yttrium", type: "Y39", amount: "100", date: "12.06.24", status: "Active" },
  { study: 56, site: "Ba@gmail.com", patient: "Barium", type: "Ba56", amount: "100", date: "12.06.24", status: "Active" },
  { study: 58, site: "Ce@gmail.com", patient: "Cerium", type: "Ce58", amount: "100", date: "12.06.24", status: "Active" },
]

const AdminMenu = (props: Props) => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState<React.JSX.Element[]>([])
  useEffect(() => {
    setData(
      elements
        .filter((a) => a.patient.indexOf(search) != -1 || search == "")
        .map((element) => (
          <Table.Tr
            key={element.study}
            onClick={(e) => {
              alert("Please Edit")
            }}
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
            <Table.Td>{element.amount}</Table.Td>
            <Table.Td>{element.date}</Table.Td>
            <Table.Td>{element.status}</Table.Td>
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

        {/* Main */}
        <AppShell.Main>
          <h1>Dashboard</h1>
          <Grid
            style={{
              display: "flex",
              marginTop: "2rem",
            }}
          >
            <Grid.Col
              style={{
                margin: "2rem",
                padding: "2rem",
                background: "linear-gradient(90deg, #076177, #4d84af)",
              }}
              span={3}
            >
              <div
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Flex direction="column">
                  <Text size="lg" style={{ marginBottom: "1rem" }}>Average monthly expense:</Text>
                  <Text size="lg" fw={700}>20.000 TL</Text>
                </Flex>
              </div>
            </Grid.Col>
            <Grid.Col
              style={{
                margin: "2rem",
                marginLeft: "6rem",
                padding: "2rem",
                background: "linear-gradient(90deg, #770707, #af4d4d)",
              }}
              span={3}
            >
              <div
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Flex direction="column">
                  <Text size="lg" style={{ marginBottom: "1rem" }}>Active patients:</Text>
                  <Text size="lg" fw={700}>24</Text>
                </Flex>
              </div>
            </Grid.Col>
            <Grid.Col
              style={{
                margin: "2rem",
                marginLeft: "6rem",
                padding: "2rem",
                background: "linear-gradient(90deg, #470777, #a04daf)",
              }}
              span={3}
            >
              <div
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Flex direction="column">
                  <Text size="lg" style={{ marginBottom: "1rem" }}>Active trials:</Text>
                  <Text size="md" fw={700}>32</Text>
                </Flex>
              </div>
            </Grid.Col>
          </Grid>

          <h1>Recent Costs</h1>
          <Stack>
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
      </AppShell>
    </ReqLogin>
  )
}

export default AdminMenu
