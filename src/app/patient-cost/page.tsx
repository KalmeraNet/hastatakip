"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React, { useEffect, useState } from "react"
import { Stack, Text, Box, Input } from "@mantine/core"
import { useUser } from "@/server/userContext"
import ProjectsItem from "@/components/items/projectsItem"
import { IconSearch } from "@tabler/icons-react"
import { Project, projectApi } from "@/server"

/*
Projects
ProjectsItem 
GetProjectsOutputParam
*/

type Props = {}

const HastaMasraf = (props: Props) => {
  const [projects, setProjects] = useState<Project[]>([])
  const user = useUser()
  useEffect(() => {
    projectApi.getServerProject({userId: user.id})
    .then((data) => {
      setProjects(data)
    })
  }, [user.id])

  return (
    <>
      {/* Header */}
      <Header title="Projects" link="/" />

      {/* Body */}
      <Stack style={{ minHeight: "500px" }} gap={0}>
        <Box style={{ padding: "1rem" }}>
          <Text size="md">
            Please select the project for which you will enter expenses.
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
        {projects.map((o) => {
          return (
            <ProjectsItem
              key={o.id ?? 0}
              id={o.id ?? 0}
              firstLine={o.name ?? ''}
              secondLine={o.title ?? ''}
              link={"/patient-cost/" + (o.id ?? 0)}
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

export default HastaMasraf
