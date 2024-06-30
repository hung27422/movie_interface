import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import NewRelease from "./Layouts/NewRelease/NewRelease";

const barlow = Barlow({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} p-2 bg-black`}>
        <div className="flex">
          <div className="w-[300px] mr-2 height-layout rounded-md">
            <Sidebar />
          </div>
          <div className="grid grid-cols-5 gap-2 flex-grow">
            <div className="col-span-4 bg-page height-layout overflow-hidden rounded-md">
              {children}
            </div>
            <div className="col-span-1 bg-new_release height-layout rounded-md">
              <NewRelease />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}