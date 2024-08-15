"use client";
import SearchItem from "@/components/SearchItem";
import useGetDataSearch from "@/hooks/api/useGetDataSearch";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/page";

function Search() {
  const [valueSearch, setValueSearch] = useState("");
  const { data: dataSearch } = useGetDataSearch({
    value: valueSearch ? valueSearch : "Hay",
    limit: valueSearch ? "51" : "9",
  });
  const handleSearchValue = (value: string) => {
    setValueSearch(value);
  };

  return (
    <div>
      <div className="w-full text-center py-2 bg-sidebar">
        <input
          type="search"
          className="w-[60%] h-12 outline-none rounded-md text-white bg-page py-1 px-3 text-sm md:text-base font-bold"
          value={valueSearch}
          placeholder="Nhập tên phim để tìm kiếm..."
          onChange={(e) => handleSearchValue(e.target.value)}
        />
      </div>
      {!valueSearch ? (
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
