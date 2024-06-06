import { Button, Flex, Stack, Text } from "@mantine/core"
import {
  IconCircleDashedCheck,
  IconClock,
  IconXboxX,
} from "@tabler/icons-react"

import React from "react"

type Props = {
  id: number
  firstLine: string
  secondLine: string
  thirdLine: string
  price: number
  date: string
  po: string
}

const FormItem = (props: Props) => {
  return (
    <>
      <Stack style={{ marginTop: "1rem" }}>
        <Flex justify="space-around" align="center">
          <Text>Patient No:</Text>
          <Text variant="unstyled">{props.firstLine}</Text>
        </Flex>
        <Flex justify="space-around" align="center">
          <Text>Project:</Text>
          <Text variant="unstyled">{props.secondLine}</Text>
        </Flex>
        <Flex justify="space-around" align="center">
          <Text>Center:</Text>
          <Text variant="unstyled">{props.thirdLine}</Text>
        </Flex>
        <Flex justify="space-around" align="center">
          <Text>Cost:</Text>
          <Text variant="unstyled">{"" + props.price} TL</Text>
        </Flex>
        <Flex justify="space-around" align="center">
          <Text>Type:</Text>
          <Text variant="unstyled">{props.po}</Text>
        </Flex>

        <div style={{ borderTop: "1px black solid" }} />

        <Flex justify="space-around" align="center">
          <Text>Status:</Text>

          <Button variant="transparent">
            <IconCircleDashedCheck style={{ color: "#55d118" }} stroke={2} />
          </Button>
          <Button variant="transparent">
            <IconClock style={{ color: "#ffd95c" }} stroke={2} />
          </Button>
          <Button variant="transparent">
            <IconXboxX style={{ color: "#ff5c5c" }} stroke={2} />
          </Button>
        </Flex>
      </Stack>
    </>
  )
}

export default FormItem
