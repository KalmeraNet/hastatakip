"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React, { useEffect, useState } from "react"
import {
  Stack,
  Box,
  TextInput,
  Flex,
  Text,
  Textarea,
  ComboboxOption,
  NumberInput,
  ComboboxDropdown,
  InputBase,
  Combobox,
  useCombobox,
  CheckIcon,
  Group,
  ComboboxOptions,
  InputPlaceholder,
  ComboboxTarget,
  ComboboxChevron,
  Button,
} from "@mantine/core"
import { GetFormsOutputParam, getForms } from "@/server"
import { useUser } from "@/server/userContext"
import Link from "next/link"

/*
Forms
FormsItem 
GetFormsOutputParam
*/

type Props = {
  formsId: string
}

const tip = { konak: "Konaklama", ulas: "Transport" }

const MasrafTipi = (props: Props) => {
  const [forms, setForms] = useState<GetFormsOutputParam[]>([])
  const user = useUser()
  useEffect(() => {
    getForms({
      userId: user.id,
      formsId: parseInt("0" + props.formsId, 10),
    }).then((data) => {
      setForms(data)
    })
  }, [user.id, props.formsId])

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: (eventSource) => {
      if (eventSource === "keyboard") {
        combobox.selectActiveOption()
      } else {
        combobox.updateSelectedOptionIndex("active")
      }
    },
  })
  const lines = [tip.konak, tip.ulas, "Yemek", "Diğer"]

  const [value, setValue] = useState<string | null>("Konaklama")

  const options = lines.map((item) => (
    <ComboboxOption value={item} key={item} active={item === value}>
      <Group gap="xs">
        {item === value && <CheckIcon size={12} />}
        <span>{item}</span>
      </Group>
    </ComboboxOption>
  ))

  return (
    <>
      {/* Header */}
      <Header title="Form" link="/cost" />

      {/* Body */}
      <Stack style={{ minHeight: "500px" }} gap={0}>
        <Box style={{ padding: "1rem", paddingBottom: ".5rem" }}>
          <Flex align="center" justify="space-between">
            <Text size="md">Please select.</Text>
            <Button
              style={{
                width: "100px",
                background: "#6395ff",
              }}
            >
              Save
            </Button>
          </Flex>
        </Box>

        <Flex
          align="center"
          justify="space-between"
          style={{
            marginTop: "10px",
            padding: ".5rem .8rem",
            backgroundColor: "#f3f3f3",
            borderTop: "solid #6395ff 1px",
          }}
        >
          <Text size="lg" fw={500}>
            Expense Type
          </Text>
          <Combobox
            store={combobox}
            resetSelectionOnOptionHover
            onOptionSubmit={(val) => {
              setValue(val)
              combobox.updateSelectedOptionIndex("active")
            }}
          >
            <ComboboxTarget targetType="button">
              <InputBase
                component="button"
                type="button"
                pointer
                rightSection={<ComboboxChevron />}
                rightSectionPointerEvents="none"
                onClick={() => combobox.toggleDropdown()}
              >
                {value || <InputPlaceholder>Pick value</InputPlaceholder>}
              </InputBase>
            </ComboboxTarget>

            <ComboboxDropdown>
              <ComboboxOptions style={{ width: "150px" }}>
                {options}
              </ComboboxOptions>
            </ComboboxDropdown>
          </Combobox>
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          style={{
            padding: ".5rem .8rem",
            backgroundColor: "#f3f3f3",
            borderTop: "solid #6395ff 1px",
          }}
        >
          <Text size="lg" fw={500}>
            Price:
          </Text>
          <NumberInput min={1} variant="unstyled" placeholder="Price" w={200} />
        </Flex>
        <Flex
          align="center"
          justify="space-between"
          style={{
            padding: ".5rem .8rem",
            backgroundColor: "#f3f3f3",
            borderTop: "solid #6395ff 1px",
          }}
        >
          <Text size="lg" fw={500}>
            Patient No:
          </Text>
          <TextInput
            variant="unstyled"
            placeholder="Patient"
            w={200}
            style={{ fontSize: "16px" }}
          />
        </Flex>
        <Flex
          align="center"
          justify="space-between"
          style={{
            padding: ".5rem .8rem",
            backgroundColor: "#f3f3f3",
            borderTop: "solid #6395ff 1px",
          }}
        >
          <Text size="lg" fw={500}>
            Date:
          </Text>
          <TextInput
            variant="unstyled"
            placeholder="Date"
            w={200}
            style={{ fontSize: "16px" }}
          />
        </Flex>

        {value === tip.konak && (
          <>
            <Flex
              align="center"
              justify="space-between"
              style={{
                padding: ".5rem .8rem",
                backgroundColor: "#f3f3f3",
                borderTop: "solid #6395ff 1px",
              }}
            >
              <Text size="lg" fw={500}>
                How Long:
              </Text>
              <NumberInput
                min={1}
                max={48}
                variant="unstyled"
                placeholder="Hour"
                w={200}
              />
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              style={{
                padding: ".5rem .8rem",
                backgroundColor: "#f3f3f3",
                borderTop: "solid #6395ff 1px",
              }}
            >
              <Text size="lg" fw={500}>
                Companions:
              </Text>
              <NumberInput
                min={1}
                max={10}
                variant="unstyled"
                placeholder="Companions"
                w={200}
              />
            </Flex>
          </>
        )}

        {value === tip.ulas && (
          <>
            <Text
              style={{
                padding: ".5rem .8rem",
                backgroundColor: "#f3f3f3",
                borderTop: "solid #6395ff 1px",
              }}
              size="lg"
              fw={500}
            >
              Route:
            </Text>
            <Flex
              style={{
                padding: ".5rem .8rem",
                backgroundColor: "#f3f3f3",
              }}
            >
              <TextInput variant="unstyled" placeholder="From Where" w={200} />
              <TextInput variant="unstyled" placeholder="To Where" w={200} />
            </Flex>

            <Flex
              align="center"
              justify="space-between"
              style={{
                padding: ".5rem .8rem",
                backgroundColor: "#f3f3f3",
                borderTop: "solid #6395ff 1px",
              }}
            >
              <Text size="lg" fw={500}>
                Transportation:
              </Text>
              <TextInput
                variant="unstyled"
                placeholder="Transportation"
                w={200}
              />
            </Flex>
          </>
        )}

        <Flex
          align="center"
          justify="space-between"
          style={{
            padding: ".5rem .8rem",
            backgroundColor: "#f3f3f3",
            borderTop: "solid #6395ff 1px",
          }}
        >
          <Text size="lg" fw={500}>
            Photo:
          </Text>

          <Link href="/photo">
            <Button
              style={{
                width: "100px",
                background: "#6395ff",
              }}
            >
              Choose
            </Button>
          </Link>
        </Flex>

        <Text
          size="lg"
          fw={500}
          style={{
            padding: ".5rem .8rem",
            backgroundColor: "#f3f3f3",
            borderTop: "solid #6395ff 1px",
          }}
        >
          Comment:
        </Text>
        <Textarea
          resize="vertical"
          placeholder="Comment:"
          variant="filled"
          style={{
            padding: ".8rem",
            backgroundColor: "#f3f3f3",
          }}
        />
      </Stack>

      {/* Footer */}
      <div style={{ marginTop: "1rem" }}>
        <Footer />
      </div>
    </>
  )
}

export default MasrafTipi
