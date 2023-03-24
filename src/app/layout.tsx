import "~/styles/globals.css"
import TabsLayout from "./components/layouts/TabLayout.tsx"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        {/* <TabsLayout>{children}</TabsLayout> */}
        {children}
      </body>
    </html>
  )
}
