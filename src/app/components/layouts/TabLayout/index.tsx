"use client"

import { type ReactNode } from "react"
import * as Tabs from "@radix-ui/react-tabs"
import Link from "next/link"

export type Tab = {
  label: string
  value: string
  children: ReactNode
}

export default function TabsLayout({ tabs }: { tabs: Tab[] }) {
  const pathName = window.location.pathname
  const defaultTab = tabs.find((tab) => tab.value === pathName)
  return (
    <Tabs.Root
      defaultValue={defaultTab?.value}
      className="flex flex-row-reverse justify-between sm:flex-col sm:justify-start"
    >
      <Tabs.List
        aria-label="tabs"
        className="sticky top-0 z-50 ml-4 flex flex-col gap-1 sm:ml-0 sm:flex-row sm:justify-end"
      >
        {tabs.map(({ value, label }) => (
          <Link href={value} key={value}>
            <Tabs.Trigger
              value={value}
              className="d data-[state=active]:text-white, whitespace-nowrap px-3 py-2 font-mono text-sm font-medium  underline-offset-2 hover:text-green-400 data-[state=active]:underline"
            >
              {label}
            </Tabs.Trigger>
          </Link>
        ))}
      </Tabs.List>
      {tabs.map(({ value, children }) => (
        <Tabs.Content value={value} key={value}>
          <div
            key={value}
            className="flex h-screen snap-start overflow-x-hidden p-6 text-8xl"
          >
            {children}
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
