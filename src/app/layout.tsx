import type { Metadata } from "next";
import { Domine, Geist, Bebas_Neue, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "../components";

const montserrat = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "mickvc*",
  description: "next-level b2b solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="w-screen min-h-dvh relative flex sm:flex-row flex-col">
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
