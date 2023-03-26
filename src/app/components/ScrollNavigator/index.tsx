"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

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
