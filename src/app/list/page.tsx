"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import ListItem from "@/components/items/listItem"
import { ListResult, listApi } from "@/server"
import { useUser } from "@/server/userContext"
import { Text } from "@mantine/core"
import React, { useEffect, useState } from "react"

/*
List
listItem 
GetListOutputParam
*/

type Props = {}

const List = (props: Props) => {
  const [list, setList] = useState<ListResult[]>([])
  const user = useUser()
  useEffect(() => {
    listApi.getServerList({
      id: user.id,
    }).then((data) => {
      setList(data)
    })
  }, [user.id])

  return (
    <>
      {/* Header */}
      <Header title="Lists" link="/"  />

      {/* Body */}
      <Text size="xl" style={{ marginTop: "1rem", marginLeft: "2rem" }}>
        Lists
      </Text>
      <div>
        {list.map((o) => {
          return (
            <ListItem
              key={o.id ?? 0}
              id={o.id ?? 0}
              firstLine={o.name ?? ""}
              secondLine={o.title ?? ""}
              thirdLine={o.tip ?? ""}
              date={o.date ?? ""}
              price={o.costType ?? 0}
              po={o.title ?? ""}
              link={"/list/" + o.id}
            />
          )
        })}
      </div>

      {/* Footer */}
      <div style={{ marginTop: "8rem" }}>
        <Footer />
      </div>
    </>
  )
}

export default List
