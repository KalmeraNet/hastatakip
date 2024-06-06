import { Flex, Grid, GridCol, Text } from "@mantine/core"
import Link from "next/link"
import React from "react"

type Props = {
  color: string
  text: string
  link: string
  id: number
}

const arr: Props[] = [
  {
    id: 1,
    color: "linear-gradient(90deg, #076177, #4d84af)",
    text: "New Cost Entry",
    link: "/cost",
  },
  {
    id: 2,
    color: "linear-gradient(90deg, #770707, #af4d4d)",
    text: "Entered Cost List",
    link: "/list",
  },
  {
    id: 3,
    color: "linear-gradient(90deg, #470777, #a04daf)",
    text: "Reports",
    link: "/reports",
  },
]

const MenuButton = () => {
  return (
    <Grid
      gutter={{ base: 30 }}
      style={{
        paddingTop: "20px",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginTop: "1.5rem",
        marginBottom: "2rem",
      }}
    >
      {arr.map((o) => {
        return (
          <GridCol key={o.id} span={12}>
            <Link
              href={o.link}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Flex
                align="center"
                justify="center"
                style={{
                  borderRadius: "15px",
                  height: "130px",
                  background: o.color,
                  textAlign: "center",
                }}
              >
                <Text fw={500}>{o.text}</Text>
              </Flex>
            </Link>
          </GridCol>
        )
      })}
    </Grid>
  )
}

export default MenuButton
