"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import React, { useEffect, useState } from "react"
import { Stack, Text, Box, Input } from "@mantine/core"
import ProjectsItem from "@/components/items/projectsItem"
import { IconSearch } from "@tabler/icons-react"
import { Project, projectApi } from "@/server"
import { ReqLogin } from "@/components/ReqLogin"
import { useUser } from "@/app/userContext"

/*
Projects
ProjectsItem 
GetProjectsOutputParam
*/

type Props = {}

const CenterCost = (props: Props) => {
  const [projects, setProjects] = useState<Project[]>([])
  const user = useUser()
  useEffect(() => {
    projectApi.getServerProject({ userId: user?.id ?? '' })
      .then((data) => {
        setProjects(data)
      })
  }, [user?.id])

  return (
    <ReqLogin>
      {/* Header */}
      <Header title="Centers" link="/sc/menu" />

      {/* Body */}
      <Stack style={{ minHeight: "500px" }} gap={0}>
        <Box style={{ padding: "1rem" }}>
          <Text size="md">
            Please select the center where you will enter the expense.
          </Text>
          <Input
            placeholder="Search for Centers"
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
              id={1}
              firstLine="Andre"
              secondLine="AA"
              link={"/center-cost/" + o.id}
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

export default CenterCost
