import { Flex } from "@mantine/core"
import Link from "next/link"
import React from "react"

type Props = {
  id: number
  firstLine: string
  secondLine: string
  thirdLine: string
  price: number
  link: string
  date: string
  po: string
}

const RaporItem = (props: Props) => {
  return (
    <>
      <Link href={props.link} style={{ color: "#000", textDecoration: "none" }}>
        <Flex
          key={props.id}
          align={"center"}
          justify={"space-between"}
          style={{
            height: "35px",
            marginTop: "15px",
            borderTop: "solid #6395ff 1px",
            borderBottom: "solid #ccc 1px",
            backgroundColor: "#f3f3f3",
          }}
        >
          <div
            style={{
              marginLeft: "1rem ",
              fontSize: "16px",
            }}
          >
            {props.date}
          </div>
          <div
            style={{
              marginRight: "2rem",
              fontSize: "16px",
            }}
          >
            {props.po}
          </div>
        </Flex>
        <Flex
          key={props.id}
          align={"center"}
          justify={"space-between"}
          style={{
            height: "60px",
            backgroundColor: "#f3f3f3",
            borderBottom: "solid #6395ff 1px",
          }}
        >
          <div>
            <div
              style={{
                marginLeft: "1.2rem ",
                fontSize: "16px",
              }}
            >
              Hasta No: {props.firstLine}
            </div>
            <div
              style={{
                marginLeft: "1.2rem ",
                fontSize: "16px",
              }}
            >
              {props.secondLine}
            </div>
          </div>

          <div
            style={{
              marginRight: "2rem ",
            }}
          >
            {/* <IconChevronRight style={{ color: "#6395ff" }} /> */}
            <div
              style={{
                marginLeft: "1.2rem ",
                fontSize: "16px",
              }}
            >
              {props.thirdLine}
            </div>

            <div
              style={{
                marginLeft: "1.2rem ",
                fontSize: "16px",
              }}
            >
              {props.price} TL
            </div>
          </div>
        </Flex>
      </Link>
    </>
  )
}

export default RaporItem
