import ProgressBar from "../components/ProgressBar"
import React from "react"
import classNames from "classnames"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import SkillList from "../components/SkillList"

export default function AboutMe() {
  const skills = [
    {
      category: "Languages",
      technologies: [
        {
          name: "Typescript",
          progress: 10,
        },
        { name: "Javascript", progress: 10 },
        { name: "HTML", progress: 10 },
        { name: "CSS", progress: 10 },
        { name: "Python", progress: 10 },
      ],
    },
    {
      category: "Frameworks",
      technologies: [
        {
          name: "React/Next.js  ",
          progress: 10,
        },
        {
          name: "React Native/Expo",
          progress: 10,
        },
        {
          name: "Node.js",
          progress: 10,
        },
        {
          name: "GraphQL",
          progress: 10,
        },
      ],
    },
    {
      category: "UI Libraries",
      technologies: [
        {
          name: "Tailwind CSS",
          progress: 10,
        },
        {
          name: "Chakra UI",
          progress: 10,
        },
        {
          name: "React Query",
          progress: 10,
        },
        {
          name: "Chakra UI",
          progress: 10,
        },
      ],
    },
    {
      category: "Databases",
      technologies: [
        {
          name: "PostgreSQL",
          progress: 10,
        },
        {
          name: "Prisma ORM",
          progress: 10,
        },
      ],
    },
    {
      category: "Hosting",
      technologies: [
        {
          name: "AWS",
          progress: 10,
        },
        {
          name: "Vercel",
          progress: 10,
        },
        {
          name: "Render",
          progress: 10,
        },
      ],
    },
    {
      category: "Project Managment and Tools",
      technologies: [
        {
          name: "Jira",
          progress: 10,
        },
        {
          name: "GitHub",
          progress: 10,
        },
        {
          name: "Notion",
          progress: 10,
        },
        {
          name: "Confluence",
          progress: 10,
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col gap-2 font-mono">
      <text className="whitespace-nowrap text-4xl">About me</text>

      <div
        className="flex flex-col rounded-lg bg-slate-800 bg-opacity-90
      p-3 text-white shadow-sm shadow-black"
      >
        <text className="text-md font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </text>
        <text className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          necessitatibus amet magnam reiciendis tempore deleniti voluptatibus
          nisi libero alias expedita laboriosam error fugit cum distinctio unde
          id doloribus. Incidunt, vitae!
        </text>
        <SkillList skills={skills} />
      </div>
    </div>
  )
}
