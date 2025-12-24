import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Sidebar } from "../components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mickvc*",
  description: "?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen min-h-screen relative flex sm:flex-row flex-col">
          <div className="w-full max-w-[270px] bg-background lg:flex hidden">
            <div className="sm:fixed sm:left-0 sm:top-0 sm:bottom-0 w-full sm:max-w-[270px]">
              <Sidebar />
            </div>
          </div>
          <div className="w-full flex flex-col bg-background justify-start">
            {children}
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
