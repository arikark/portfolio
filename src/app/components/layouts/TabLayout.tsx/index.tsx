"use client"

import * as Tabs from "@radix-ui/react-tabs"
import Link from "next/link"

const tabs = [
  {
    label: "About me",
    href: "/about-me",
    value: "tab1",
  },
  {
    label: "Feedback",
    href: "/feedback",
    value: "tab2",
  },
]

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = window.location.pathname
  const defaultTab = tabs.find((tab) => tab.href === pathName)
  return (
    <Tabs.Root
      defaultValue={defaultTab?.value}
      className="flex flex-row-reverse justify-between sm:flex-col sm:justify-start"
    >
      <Tabs.List
        aria-label="tabs"
        className="sticky top-0 z-50 ml-4 flex flex-col gap-1 sm:ml-0 sm:flex-row sm:justify-end"
      >
        {tabs.map(({ href, value, label }) => (
          <Link href={href} key={value}>
            <Tabs.Trigger
              value={value}
              className="d data-[state=active]:text-white, whitespace-nowrap px-3 py-2 font-mono text-sm font-medium  underline-offset-2 hover:text-green-400 data-[state=active]:underline"
            >
              {label}
            </Tabs.Trigger>
          </Link>
        ))}
        <Tabs.List />
      </Tabs.List>
      {tabs.map(({ value }) => (
        <Tabs.Content value={value} key={value}>
          {children}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
