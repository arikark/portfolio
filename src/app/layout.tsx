import "~/styles/globals.css"

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
        <div className="bg-gradient-to-t from-slate-900 via-blue-900 to-blue-800">
          {children}
        </div>
      </body>
    </html>
  )
}
