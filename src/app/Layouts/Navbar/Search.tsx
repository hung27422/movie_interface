"use client";
import useGetDataSearch from "@/hooks/api/useGetDataSearch";
import { useContext, useState } from "react";
import "tippy.js/dist/tippy.css";
import React from "react";
import Tippy from "@tippyjs/react/headless";
import Image from "next/image";
import Link from "next/link";
import { FilmContext } from "@/app/ContextFilm/ContextFilm";
import Spinner from "@/app/pages/Spinner/page";
import useDebounce from "@/hooks/components/useDebounce";

function Search() {
  const { setValueSearchContext } = useContext(FilmContext);
  const [valueSearch, setValueSearch] = useState("");
  const debouncedSearchValue = useDebounce(valueSearch, 300);
  const { data } = useGetDataSearch({
    value: debouncedSearchValue,
    limit: "5",
  });
  const handleSearchValue = (value: string) => {
    if (!value.startsWith(" ")) {
      setValueSearch(value);
    }
  };
  const handleSendValueInput = () => {
    setValueSearchContext(valueSearch);
  };
  const dataSearch = data?.data?.items;
  const resultSearch = (attrs: any) => (
    <div className=" w-[450px] p-2 bg-new_release rounded-md" {...attrs}>
      {data ? (
        <div>
          {dataSearch?.map((item, index) => {
            return (
              <Link
                href={`/pages/Detail/${item.slug}`}
                key={index}
                className="flex items-start px-2 py-1 rounded-lg hover:bg-primary cursor-pointer"
              >
                <Image
                  src={"https://img.phimapi.com/" + item.poster_url}
                  alt="image_film"
                  width={70}
                  height={60}
                  className="h-[80px] rounded-md mr-4"
                />
                <div className="flex flex-col items-start min-w-0">
                  <span className="text-white font-black text-left truncate w-full">
                    {item.name}
                  </span>
                  <span className="text-white font-normal">{item.time}</span>
                  <span className="text-white font-normal">
                    Năm: {item.year}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <Spinner />
      )}
      {data && (
        <div>
          <Link
            href={`/pages/Search`}
            onClick={handleSendValueInput}
            className="flex items-center justify-center text-xl font-medium ml-auto mr-auto h-10 bg-primary w-[90%] rounded-lg mt-4"
          >
            Tìm kiếm thêm...
          </Link>
        </div>
      )}
    </div>
  );
  return (
    <Tippy
      trigger="click"
      render={(attrs) => (valueSearch ? resultSearch(attrs) : null)}
      interactive
    >
      <input
        type="search"
        className="w-full h-12 outline-none rounded-md text-white bg-page py-1 px-3 text-sm md:text-base font-bold"
        placeholder="Nhập tên phim để tìm kiếm..."
        value={valueSearch}
        onChange={(e) => handleSearchValue(e.target.value)}
      />
    </Tippy>
  );
}

export default Search;
