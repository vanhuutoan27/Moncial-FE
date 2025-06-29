import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"

import { ThemeProvider } from "@/providers/theme-provider"

import "../styles/globals.css"

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Moncial - Moments Worth Sharing",
  description:
    "A social media app for sharing emotions, memories, and real-life moments that matter."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
