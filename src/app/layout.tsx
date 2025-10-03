import { Inter } from "next/font/google";
import "./globals.css";
import LenisScrollProvider from "@/providers/lenis-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased gradient-bg`}
      >
        <LenisScrollProvider>
          {children}
        </LenisScrollProvider>
      </body>
    </html>
  );
}
