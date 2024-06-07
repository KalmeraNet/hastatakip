import "@mantine/core/styles.css"
import React from "react"
import { MantineProvider, ColorSchemeScript } from "@mantine/core"
import { theme } from "../theme"
import { Viewport } from "next"
import { NextAuthProvider } from "@/components/nextAuthProvider"

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
        <NextAuthProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
