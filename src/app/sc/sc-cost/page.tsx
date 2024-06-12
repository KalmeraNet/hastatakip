"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React, { useEffect, useState } from "react"
import { Stack, Text, Box, Input } from "@mantine/core"
import ProjectsItem from "@/components/items/projectsItem"
import { IconSearch } from "@tabler/icons-react"
import { useUser } from "@/app/userContext"
import { Project, projectApi } from "@/server"
import { ReqLogin } from "@/components/ReqLogin"

/*
Projects
ProjectsItem 
GetProjectsOutputParam
*/

type Props = {}

const ScMasraf = (props: Props) => {
  const [projects, setProjects] = useState<Project[]>([])
  const user = useUser()
  useEffect(() => {
    projectApi.getServerProject({ userId: user?.id }).then((data) => {
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
          // value={search}
          // onChange={(e) => {
          //   setSearch(e.target.value)
          // }}
          />
        </Box>
        {projects.map((o) => {
          return (
            <ProjectsItem
              key={o.id}
              id={0}
              firstLine="#6395ff"
              secondLine="#f3f3f3"
              link={"/sc-cost/" + o.id}
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

export default ScMasraf
