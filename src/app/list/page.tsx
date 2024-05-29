"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import ListItem from "@/components/items/listItem"
import { GetListOutputParam, getList } from "@/server"
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
  const [list, setList] = useState<GetListOutputParam[]>([])
  const user = useUser()
  useEffect(() => {
    getList({
      userId: user.id,
    }).then((data) => {
      setList(data)
    })
  }, [user.id])

  return (
    <>
      {/* Header */}
      <Header title="Lists" link="/" />

      {/* Body */}
      <Text size="xl" style={{ marginTop: "1rem", marginLeft: "2rem" }}>
        Lists
      </Text>
      <div>
        {list.map((o) => {
          return (
            <ListItem
              key={o.id}
              id={o.id}
              firstLine={o.name}
              secondLine={o.title}
              thirdLine={o.tip}
              price={o.price}
              date={o.date}
              po={o.po}
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
