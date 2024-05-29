"use client"
import { ReactSketchCanvas } from "react-sketch-canvas"
import { useState } from "react"
import Link from "next/link"
import { Button, Flex, Text } from "@mantine/core"

const somePreserveAspectRatio = [
  "none",
  "xMinYMin",
  "xMidYMin",
  "xMaxYMin",
  "xMinYMid",
  "xMidYMid",
  "xMaxYMid",
  "xMinYMax",
  "xMidYMax",
  "xMaxYMax",
] as const

type SomePreserveAspectRatio = (typeof somePreserveAspectRatio)[number]

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState("")
  const [preserveAspectRatio] = useState<SomePreserveAspectRatio>("none")

  const handleBackgroundImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <div className="d-flex flex-column gap-2 p-2">
        <h1>Photo</h1>
        <div className="d-flex gap-2 flex-column">
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              id="backgroundImage"
              placeholder="Upload an image to use as a background"
              onChange={handleBackgroundImageChange}
            />
          </div>
        </div>

        <h3>Canvas</h3>
        <ReactSketchCanvas
          backgroundImage={backgroundImage}
          preserveBackgroundImageAspectRatio={preserveAspectRatio}
          height="24rem"
          width="22rem"
          style={{ marginLeft: "1.2rem", border: "1px solid black" }}
        />

        <Flex justify="left" style={{ margin: "1.2rem" }}>
          <Link href="/cost">
            <Button
              style={{
                width: "100px",
                background: "#6395ff",
              }}
            >
              Save
            </Button>
          </Link>
        </Flex>
      </div>
    </>
  )
}
