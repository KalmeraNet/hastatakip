import React from "react"
import { Flex } from "@mantine/core"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f3f3f3",
        borderTop: ".1px #000 solid",
      }}
    >
      <div style={{ width: "100%" }}>
        <Flex justify="space-between" align="center" style={{ width: "100%" }}>
          <h3 style={{ marginLeft: "1.2rem", fontSize: "16px" }}>
            Powered by <span style={{ color: "#6395ff " }}>KalmeraNet</span>
          </h3>
          <h3 style={{ marginRight: "1.2rem", fontSize: "16px" }}>Logo</h3>
        </Flex>
      </div>
    </div>
  )
}

export default Footer
