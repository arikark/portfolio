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
      bg-gradient-to-b from-black via-slate-900 to-slate-800 text-white"
        >
          {children}
        </div>
      </body>
    </html>
  )
}
