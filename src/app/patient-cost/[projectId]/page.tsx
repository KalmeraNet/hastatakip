"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React, { useEffect, useState } from "react"
import { Stack, Text, Box, Input } from "@mantine/core"
import ListItem from "@/components/items/projectsItem"
import { IconSearch } from "@tabler/icons-react"
import { GetServerLocationResult, locationApi } from "@/server"
import { useUser } from "@/server/userContext"

/*
Locations
LocationsItem 
GetLocationsOutputParam
*/

type Props = { params: { projectId: string } }

const Locations = (props: Props) => {
  const [locations, setLocations] = useState<GetServerLocationResult[]>([])
  const user = useUser()
  useEffect(() => {
    locationApi.getServerLocation({
      id: parseInt("0" + props.params.projectId, 10),
    }).then((data) => {
      setLocations(data)
    })
  }, [user.id, props.params.projectId])

  return (
    <>
      {/* Header */}
      <Header title="Locations" link="/cost" />

      {/* Body */}
      <Stack style={{ minHeight: "500px" }} gap={0}>
        <Box style={{ padding: "1rem" }}>
          <Text size="md">
            Please select the location where you will enter the expense.
          </Text>
          <Input
            placeholder="Search for Trial"
            rightSection={<IconSearch />}
            style={{ height: "auto", width: "100%", marginTop: ".5rem" }}
            // value={search}
            // onChange={(e) => {
            //   setSearch(e.target.value)
            // }}
          />
        </Box>
        {locations.map((o) => {
          return (
            <ListItem
              key={o.id}
              id={o.id}
              firstLine={o.name}
              secondLine={o.title}
              link={"/patient-cost/" + props.params.projectId + "/" + o.id}
            />
          )
        })}
      </Stack>

      {/* Footer */}
      <div style={{ marginTop: "1rem" }}>
        <Footer />
      </div>
    </>
  )
}

export default Locations
