import type React from "react"
import "@/app/globals.css"
import { Kanit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "700"],
})

export const metadata = {
  title: "โรงเรียนสอนขับรถ",
  description: "โรงเรียนสอนขับรถ สอนขับรถโดยครูผู้เชี่ยวชาญ รถเรียนทันสมัย ปลอดภัย และได้ใบขับขี่แน่นอน",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={kanit.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
