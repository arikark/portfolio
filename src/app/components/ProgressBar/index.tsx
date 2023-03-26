"use client"

import React, { useEffect, useRef, useState } from "react"
import * as Progress from "@radix-ui/react-progress"
import { useInView } from "framer-motion"

export default function ProgressBar({
  progress: initialProgress,
}: {
  progress: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [progress, setProgress] = useState(initialProgress)

  useEffect(() => {
    if (isInView) {
      setProgress(initialProgress)
    } else {
      setProgress(0)
    }
  }, [initialProgress, isInView])

  return (
    <Progress.Root
      ref={ref}
      className="bg-blackA9 relative h-[25px] w-full overflow-hidden rounded-full border-2 border-white"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-white transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  )
}
