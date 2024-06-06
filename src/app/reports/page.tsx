"use client"
import Footer from "@/components/footer"
import Header from "@/components/header"
import RaporItem from "@/components/items/raporItem"
import { ListResult, listApi } from "@/server"
import { useUser } from "@/server/userContext"
import { Text } from "@mantine/core"
import React, { useEffect, useState } from "react"

type Props = {}

const Reports = (props: Props) => {
  const [list, setList] = useState<ListResult[]>([])
  const user = useUser()
  useEffect(() => {
    listApi.getServerList({
      userId: user.id,
    }).then((data) => {
      setList(data)
    })
  }, [user.id])
  return (
    <>
      {/* Header */}
      <Header title="Reports" link="/menu" />

      {/* Body */}
      <Text size="xl" style={{ marginTop: "1rem", marginLeft: "2rem" }}>
        Reports
      </Text>

      {list.map((o) => {
        return (
          <RaporItem
            key={o.id}
            id={o.id ?? 0}
            firstLine={o.name ?? ""}
            secondLine={o.title ?? ""}
            thirdLine={o.tip ?? ""}
        po={o.price ??""}
            date={o.date ?? ""}
        price={o.costType ?? 0}
            link={"/reports/" + o.id}
          />
        )
      })}

      {/* Footer */}
      <div style={{ marginTop: "8rem" }}>
        <Footer />
      </div>
    </>
  )
}

export default Reports
