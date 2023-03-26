import AboutMe from "./AboutMe"
import { type Tab } from "./components/layouts/TabLayout"
import ScrollNavigator from "./components/ScrollNavigator"
import EducationWorkExperience from "./EducationWorkExperience"
import Home from "./Home"
import Testimonials from "./Testimonials"

const pages: Tab[] = [
  {
    label: "Home",
    value: "home",
    children: <Home />,
  },
  {
    label: "About me",
    value: "about-me",
    children: <AboutMe />,
  },
  {
    label: "Testimonials",
    value: "testimonials",
    children: <Testimonials />,
  },
  {
    label: "Education and Work Experience",
    value: "education-and-work-experience",
    children: <EducationWorkExperience />,
  },
]

export default function Page() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
      {pages.map(({ label, children, value }) => (
        <div
          key={label}
          className="flex h-screen w-screen snap-start p-10"
          id={value}
        >
          <ScrollNavigator hashPath={value}>{children}</ScrollNavigator>
        </div>
      ))}
    </div>
  )
}
