"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"

export default function ScrollNavigator({
  children,
  hashPath,
}: {
  children: ReactNode
  hashPath: string
}) {
  return (
    <motion.div
      viewport={{
        once: true,
        amount: "all",
      }}
      onViewportEnter={() => (window.location.hash = hashPath)}
    >
      {children}
    </motion.div>
  )
}
