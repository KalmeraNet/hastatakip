"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React, { useEffect, useState } from "react"
import { Stack, Text, Box, Input } from "@mantine/core"
import { useUser } from "@/app/userContext"
import ProjectsItem from "@/components/items/projectsItem"
import { IconSearch } from "@tabler/icons-react"
import { Project, projectApi } from "@/server"
import { ReqLogin } from "@/components/ReqLogin"

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
    projectApi.getServerProject({ userId: user?.id })
      .then((data) => {
        setProjects(data)
      })
  }, [user?.id])

  return (
    <ReqLogin>
      {/* Header */}
      <Header title="Projects" link="/sc/menu" />

      {/* Body */}
      <Stack style={{ minHeight: "500px" }} gap={0}>
        <Box style={{ padding: "1rem" }}>
          <Text size="md">
            Please select the project for which you will enter expenses.
          </Text>
          <Input
            placeholder="Search for Projects"
            rightSection={<IconSearch />}
            style={{ height: "auto", width: "100%", marginTop: ".5rem" }}
          />
        </Box>
        {projects.map((o) => {
          return (
            <ProjectsItem
              key={o.id ?? 0}
              id={o.id ?? 0}
              firstLine={o.name ?? ''}
              secondLine={o.title ?? ''}
              link={"/sc/patient-cost/" + (o.id ?? 0)}
            />
          )
        })}
      </Stack>

      {/* Footer */}
      <div style={{ marginTop: "1rem" }}>
        <Footer />
      </div>
    </ReqLogin>
  )
}

export default HastaMasraf
