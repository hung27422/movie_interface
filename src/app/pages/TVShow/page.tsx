"use client";
import useGetFilmMovie from "@/hooks/api/useGetFilmMovie";
import CategoriesFilm from "../../../components/CategoriesFilm";
import FilmItem from "@/components/FilmItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Spinner from "../Spinner/page";
import useGetFilmTVShow from "@/hooks/api/useGetFilmTVShow";

function Phimle() {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data: dataTV } = useGetFilmTVShow({ page: page, limit: 15 });
  const tvShows = dataTV?.data.items;
  const totalPages = dataTV?.data.params.pagination.totalPages;
  if (!dataTV) return <Spinner />;
  return (
    <div className="flex min-h-screen flex-col p-2 relative">
      <h2 className="text-4xl py-2 text-center">--TV Show--</h2>
      {/* <CategoriesFilm /> */}
      <div className="grid grid-cols-2 md:grid-cols-5 mt-3 mb-20">
        {tvShows?.map((item, index) => {
          return <FilmItem key={index} data={item} />;
        })}
      </div>
      <div className="flex items-center justify-center py-2 absolute bottom-3 left-0 right-0">
        <Stack spacing={2} className="block md:hidden">
          <Pagination
            onChange={handleChange}
            page={page}
            count={totalPages}
            color="primary"
            size="small"
            style={{
              color: "black",
              backgroundColor: "#374151",
              padding: "4px 0",
              borderRadius: "24px",
            }}
          />
        </Stack>
        {/*  */}
        <Stack spacing={2} className="hidden md:block">
          <Pagination
            onChange={handleChange}
            page={page}
            count={totalPages}
            color="primary"
            style={{
              color: "black",
              backgroundColor: "#374151",
              padding: "4px 0",
              borderRadius: "24px",
            }}
          />
        </Stack>
      </div>
    </div>
  );
}

export default Phimle;
