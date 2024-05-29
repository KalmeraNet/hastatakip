/* eslint-disable @next/next/no-img-element */
"use client"
import { useRef, useCallback } from "react"
import Webcam from "react-webcam"

interface WebcamSketchProps {
  onCapture: (dataUri: string) => void
}

const WebcamSketch: React.FC<WebcamSketchProps> = ({ onCapture }) => {
  const webcamRef = useRef<Webcam>(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      onCapture(imageSrc)
    }
  }, [webcamRef, onCapture])

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture</button>
    </div>
  )
}

export default WebcamSketch
