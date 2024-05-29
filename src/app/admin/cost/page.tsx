"use client"
import AdminHeader from "@/components/adminHeader"
import AdminNavbar from "@/components/adminNavbar"
import { Anchor, AppShell } from "@mantine/core"
import AdminCost from "@/components/adminCost"

type Props = {}

const elements = [
  { position: 6, lastname: "C", name: "Carbon", icon: "C6" },
  { position: 7, lastname: "N", name: "Nitrogen", icon: "N7" },
  { position: 39, lastname: "Y", name: "Yttrium", icon: "Y39" },
  { position: 56, lastname: "Ba", name: "Barium", icon: "Ba56" },
  { position: 58, lastname: "Ce", name: "Cerium", icon: "Ce58" },
]

const items = [
  { title: "Menu", href: "/admin/menu" },
  { title: "Costs", href: "/admin/cost" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
))

const CostSide = (props: Props) => {
  return (
    <AppShell>
      {/* Header */}
      <AdminHeader />

      {/* Navbar */}
      <AdminNavbar />

      {/* Body */}
      <AdminCost />
    </AppShell>
  )
}

export default CostSide
