"use client";

import { DataFilms } from "@/types";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
function useGetFilmMovie() {
  const { data, error } = useSWR<DataFilms>(
    "https://phimapi.com/v1/api/danh-sach/phim-le",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error };
}

export default useGetFilmMovie;
