import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import NewRelease from "./Layouts/NewRelease/NewRelease";
import NavbarMobile from "./Layouts/NavbarMobile/NavbarMobile";

const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Interface",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} p-2 bg-black hidden-scrollbar`}>
        <div className="grid md:grid-cols-6 gap-2 md:relative">
          <div className="md:hidden sticky top-2 left-2 right-2 z-30">
            <NavbarMobile />
          </div>
          <div className="md:col-span-1 height-layout rounded-md hidden md:block">
            <Sidebar />
          </div>
          <div className="md:col-span-4 bg-page height-layout overflow-y-auto overflow-hidden rounded-md hidden-scrollbar">
            {children}
          </div>
          <div className="md:col-span-1 bg-new_release height-layout overflow-y-auto rounded-md hidden-scrollbar overflow-hidden hidden md:block">
            <NewRelease />
          </div>
        </div>
      </body>
    </html>
  );
}
