"use client";
import useGetFilmMovie from "@/hooks/api/useGetFilmMovie";
import CategoriesPhimle from "./CategoriesPhimle";
import FilmItem from "@/components/FilmItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function Phimle() {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data: dataMovie } = useGetFilmMovie({ page: page, limit: 15 });
  const movies = dataMovie?.data.items;
  const totalPages = dataMovie?.data.params.pagination.totalPages;
  return (
    <div className="flex min-h-screen flex-col p-2 ">
      <h2 className="text-4xl py-2 text-center">--Phim lẻ--</h2>
      <CategoriesPhimle />
      <div className="grid grid-cols-5 mt-3">
        {movies?.map((movie, index) => {
          return <FilmItem key={index} data={movie} />;
        })}
      </div>
      <div className="flex items-center justify-center py-2">
        <Stack spacing={2}>
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
