"use client"
import { ReqLogin } from "@/components/ReqLogin"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Flex, Grid, GridCol, Text } from "@mantine/core"
import Link from "next/link"

type Props = {
  color: string
  text: string
  link: string
  id: number
}

const arr: Props[] = [
  {
    id: 1,
    color: "linear-gradient(90deg,  #FC766AFF, #fa9288)",
    text: "Site Coordinator Cost",
    link: "/sc/sc-cost",
  },
  {
    id: 2,
    color: "linear-gradient(90deg, #9fa3a2, #d5d5d5)",
    text: "Patient Cost",
    link: "/sc/patient-cost",
  },
  {
    id: 3,
    color: "linear-gradient(90deg, #184A45FF, #336761)",
    text: "Center Cost",
    link: "/sc/center-cost",
  },
]

const MasrafId = (props: Props) => {
  return (
    <ReqLogin>
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{ height: "100dh" }}
      >
        <div
          style={{
            height: "80px",
            width: "100%",
            backgroundColor: "#f3f3f3",
          }}
        >
          {/* Header */}
          <Header />
        </div>

        {/* Body */}
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

        {/* Footer */}
        <Footer />
      </Flex>
    </ReqLogin>
  )
}

export default MasrafId
