import {} from "tailwindcss"

import AboutMe from "./AboutMe"
import EducationWorkExperience from "./EducationWorkExperience"
import Landing from "./Landing"
import Testimonials from "./Testimonials"

type Page = {
  label: string
  href: string
  component: () => JSX.Element
}

const pages: Page[] = [
  {
    label: "About me",
    href: "/about-me",
    component: () => <Landing />,
  },
  {
    label: "Feedback",
    href: "/feedback",
    component: () => <AboutMe />,
  },
  {
    label: "Other",
    href: "/other",
    component: () => <Testimonials />,
  },
  {
    label: "Other",
    href: "/other",
    component: () => <EducationWorkExperience />,
  },
]

export default function Page() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
      {pages.map(({ component, label }) => (
        <div key={label} className="flex h-screen w-screen snap-start text-8xl">
          {component()}
        </div>
      ))}
    </div>
  )
}
