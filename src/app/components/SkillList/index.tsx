"use client"
import * as Accordion from "@radix-ui/react-accordion"

import ProgressBar from "../ProgressBar"

export default function SkillList({
  skills,
}: {
  skills: {
    category: string
    technologies: {
      name: string
      progress: number
    }[]
  }[]
}) {
  return (
    <Accordion.Root
      className="bg-mauve6 w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {skills.map(({ category, technologies }) => (
        <Accordion.AccordionItem key={category} value={category}>
          <Accordion.AccordionTrigger className="font-bold">
            {category}
          </Accordion.AccordionTrigger>
          <Accordion.AccordionContent>
            {technologies.map(({ name, progress }) => (
              <div key={name} className="flex w-1/2 flex-row justify-between">
                <text className="w-1/2">{name}</text>
                <div className="w-1/2">
                  <ProgressBar progress={progress} />
                </div>
              </div>
            ))}
          </Accordion.AccordionContent>
        </Accordion.AccordionItem>
      ))}
    </Accordion.Root>
  )
}
