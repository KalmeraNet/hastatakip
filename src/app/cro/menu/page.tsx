"use client"
import React, { useEffect, useState } from "react"
import { Button, Stack, Flex, Menu, rem, Grid, Text } from "@mantine/core"
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react"
import { AppShell, Table } from "@mantine/core"
import Link from "next/link"
import CroHeader from "@/components/croHeader"
import CroNavbar from "@/components/croNavbar"

type Props = {}

const elements = [
  { position: 6, lastname: "C@gmail.com", name: "Carbon", icon: "C6" },
  { position: 7, lastname: "N@gmail.com", name: "Nitrogen", icon: "N7" },
  { position: 39, lastname: "Y@gmail.com", name: "Yttrium", icon: "Y39" },
  { position: 56, lastname: "Ba@gmail.com", name: "Barium", icon: "Ba56" },
  { position: 58, lastname: "Ce@gmail.com", name: "Cerium", icon: "Ce58" },
]

const CroMenu = (props: Props) => {
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
      <CroHeader />

      {/* Navbar */}
      <CroNavbar />

      {/* Main */}
      <AppShell.Main>
        <h1>Menu</h1>
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
              background: "linear-gradient(90deg, #077577, #a24daf)",
            }}
            span={3}
          >
            <Link
              href="cost"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Flex direction="column">
                <Text size="lg">Cost</Text>
                <div>2</div>
                <div>3</div>
              </Flex>
            </Link>
          </Grid.Col>
          <Grid.Col
            style={{
              margin: "2rem",
              marginLeft: "6rem",
              padding: "2rem",
              background: "linear-gradient(90deg, #077710, #4daf6c)",
            }}
            span={3}
          >
            <Link
              href="cost"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Flex direction="column">
                <Text size="lg">Cost</Text>
                <div>2</div>
                <div>3</div>
              </Flex>
            </Link>
          </Grid.Col>
          <Grid.Col
            style={{
              margin: "2rem",
              marginLeft: "6rem",
              padding: "2rem",
              background: "linear-gradient(90deg, #edab1d, #af4d4d)",
            }}
            span={3}
          >
            <Link
              href="cost"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Flex direction="column">
                <Text size="lg">Cost</Text>
                <div>2</div>
                <div>3</div>
              </Flex>
            </Link>
          </Grid.Col>
        </Grid>

        <h1>Recent Costs</h1>
        <Stack>
          <Table highlightOnHover styles={{ table: { width: "100%" } }}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Cost No</Table.Th>
                <Table.Th styles={{ th: { width: 0 } }} />
                <Table.Th>Cost Name</Table.Th>
                <Table.Th>Cost Email</Table.Th>
                <Table.Th>Cost Code</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{data}</Table.Tbody>
          </Table>
        </Stack>
      </AppShell.Main>
    </AppShell>
  )
}

export default CroMenu
