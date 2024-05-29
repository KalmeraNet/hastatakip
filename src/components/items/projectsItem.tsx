import { Flex } from "@mantine/core"
import { IconChevronRight } from "@tabler/icons-react"
import Link from "next/link"
import React from "react"

type Props = {
  id: number
  firstLine: string
  secondLine: string
  link: string
}

const ProjectsItem = (props: Props) => {
  return (
    <>
      <Link href={props.link} style={{ color: "#000", textDecoration: "none" }}>
        <Flex
          key={props.id}
          align={"center"}
          justify={"space-between"}
          style={{
            height: "60px",
            borderTop: "solid #6395ff 1px",
            backgroundColor: "#f3f3f3",
          }}
        >
          <div>
            <div
              style={{
                marginLeft: "1.2rem ",
                fontSize: "16px",
                textOverflow: "ellipsis",
                maxWidth: "18rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {props.firstLine}
            </div>
            <div
              style={{
                marginLeft: "1.2rem ",
                fontSize: "16px",
                textOverflow: "ellipsis",
                maxWidth: "18rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
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
            <IconChevronRight style={{ color: "#6395ff" }} />
          </div>
        </Flex>
      </Link>
    </>
  )
}

export default ProjectsItem
