export default function Page() {
  const pages = [
    {
      label: "About me",
      href: "/about-me",
      component: () => <div>1</div>,
      bgColor: "bg-amber-200",
    },
    {
      label: "Feedback",
      href: "/feedback",
      component: () => <div>2</div>,
      bgColor: "bg-teal-200",
    },
    {
      label: "Other",
      href: "/other",
      component: () => <div>3</div>,
      bgColor: "bg-pink-200",
    },
  ]

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll">
      {pages.map(({ component, label, bgColor }) => (
        <div
          key={label}
          className={`flex h-screen w-screen snap-start items-center justify-center text-8xl ${bgColor}`}
        >
          {component()}
        </div>
      ))}
    </div>
  )
}
