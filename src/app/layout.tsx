import "@mantine/core/styles.css"
import React from "react"
import { MantineProvider, ColorSchemeScript } from "@mantine/core"
import { theme } from "../theme"
import { UserProvider } from "@/server/userContext"
import { Viewport } from "next"

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <ColorSchemeScript />
      </head>
      <body style={{ height: "100%" }}>
        <UserProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </UserProvider>
      </body>
    </html>
  )
}
