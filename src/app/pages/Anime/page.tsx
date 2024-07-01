"use client";
import useGetFilmMovie from "@/hooks/api/useGetFilmMovie";
import FilmItem from "@/components/FilmItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import useGetFilmAnime from "@/hooks/api/useGetFilmAnime";

function Anime() {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data: dataAnime } = useGetFilmAnime({ page: page, limit: 15 });
  const animes = dataAnime?.data.items;
  const totalPages = dataAnime?.data.params.pagination.totalPages;
  return (
    <div className="flex min-h-screen flex-col p-2 ">
      <h2 className="text-4xl py-2 text-center">--Hoạt Hình--</h2>
      <div className="grid grid-cols-5 mt-3">
        {animes?.map((anime, index) => {
          return <FilmItem key={index} data={anime} />;
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

export default Anime;
