"use client";
import Image from "next/image";
import Logo from "../../../assets/images/Logo.jpg";
import CategoryMenu from "@/components/CategoryMenu";
import { DatePicker } from "@mui/x-date-pickers";
import CategoryYear from "@/components/CategoryYear";
import CategoryCountry from "@/components/CategoryCountry";
import { useEffect, useState } from "react";
import useGetDataSearch from "@/hooks/api/useGetDataSearch";
import { usePathname } from "next/navigation";
import ModalResultSearch from "@/components/ModalResultSearch";
import { Paper } from "@mui/material";
import Spinner from "@/app/pages/Spinner/page";
import Search from "./Search";
import NavbarDrawer from "@/components/NavbarDrawer";

function Navbar() {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/pages/Search" && (
        <div className="grid grid-cols-12 items-center text-center py-2 px-2  bg-sidebar">
          <div className="md:col-span-7 col-span-12 flex text-center items-center justify-start mr-5">
            <div className="md:hidden block">
              <NavbarDrawer />
            </div>
            <Image
              className="rounded-lg mr-4"
              src={Logo}
              width={60}
              height={50}
              alt="Logo"
            />
            <div className="w-[80%]">
              <Search />
            </div>
          </div>
          <div className="hidden md:flex first-letter col-span-5  items-center justify-start">
            <div>
              <CategoryMenu />
            </div>
            <div>
              <CategoryCountry />
            </div>
            <div>
              <CategoryYear />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
