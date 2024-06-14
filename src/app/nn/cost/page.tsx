"use client"
import AdminHeader from "@/components/adminHeader"
import AdminNavbar from "@/components/adminNavbar"
import { Anchor, AppShell } from "@mantine/core"
import AdminCost from "@/components/adminCost"
import { ReqLogin } from "@/components/ReqLogin"

type Props = {}

const items = [
  { title: "Menu", href: "/nn/menu" },
  { title: "Costs", href: "/nn/cost" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))

const CostSide = (props: Props) => {
  return (
    <ReqLogin>

      <AppShell>
        {/* Header */}
        <AdminHeader />

        {/* Navbar */}
        <AdminNavbar />

        {/* Body */}
        <AdminCost />
      </AppShell>
    </ReqLogin>
  )
}

export default CostSide
