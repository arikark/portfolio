"use client"

export default function IconButton({
  children,
  ...props
}: React.PropsWithChildren<{
  onClick: () => void
}>) {
  return (
    <button
      className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded py-2 px-4 font-bold"
      {...props}
    >
      {children}
    </button>
  )
}
