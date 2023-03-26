"use client"

import { type ReactNode } from "react"

import "~/styles/globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <div
          className="h-screen w-screen
      snap-y snap-mandatory
      items-center justify-center overflow-scroll scroll-smooth
      bg-gradient-to-t from-slate-900 via-blue-900 to-blue-800 text-white"
        >
          {children}
        </div>
      </body>
    </html>
  )
}
