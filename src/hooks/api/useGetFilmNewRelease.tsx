"use client";
import { DataFilms, NewReleaseFilm } from "@/types";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
interface Props {
  page: number;
}
function useGetFilmNewRelease({ page }: Props) {
  const { data, error } = useSWR<NewReleaseFilm>(
    `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error };
}

export default useGetFilmNewRelease;
