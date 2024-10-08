"use client";
import SearchItem from "@/components/SearchItem";
import useGetDataSearch from "@/hooks/api/useGetDataSearch";
import { useContext, useEffect, useState } from "react";
import Spinner from "../Spinner/page";
import { usePathname } from "next/navigation";
import Logo from "../../../assets/images/Logo.jpg";
import Image from "next/image";
import { FilmContext } from "@/app/ContextFilm/ContextFilm";
import useDebounce from "@/hooks/components/useDebounce";
import NavbarDrawer from "@/components/NavbarDrawer";
function Search() {
  const { valueSearchContext, setValueSearchContext } = useContext(FilmContext);

  const [valueSearch, setValueSearch] = useState("");
  const isShowDataSearch = valueSearchContext || valueSearch;
  const debouncedSearchValue = useDebounce(valueSearch, 300);
  const { data: dataSearch } = useGetDataSearch({
    value: valueSearchContext
      ? valueSearchContext
      : debouncedSearchValue
      ? debouncedSearchValue
      : "Hay",
    limit: isShowDataSearch ? "51" : "9",
  });
  const handleSearchValue = (value: string) => {
    if (!value.startsWith(" ")) {
      setValueSearchContext("");
      setValueSearch(value);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-start md:justify-center w-full py-2 bg-sidebar">
        <div className="md:hidden block">
          <NavbarDrawer />
        </div>
        <div>
          <Image
            className="rounded-lg mr-4"
            src={Logo}
            width={60}
            height={60}
            alt="logo"
          />
        </div>
        <input
          type="search"
          className="w-[60%] h-12 outline-none rounded-md text-white bg-page py-1 px-3 text-sm md:text-base font-bold"
          value={valueSearch}
          placeholder="Nhập tên phim để tìm kiếm..."
          onChange={(e) => handleSearchValue(e.target.value)}
        />
      </div>
      {!isShowDataSearch ? (
        <div className="w-full text-center my-3">
          <span className="text-4xl text-center">Những bộ phim Hot</span>
        </div>
      ) : (
        <div className="w-full text-center my-3">
          <span className="text-4xl">{dataSearch?.data.titlePage}</span>
        </div>
      )}
      {!dataSearch ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
          {dataSearch?.data.items.map((item, index) => {
            return <SearchItem key={index} data={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
