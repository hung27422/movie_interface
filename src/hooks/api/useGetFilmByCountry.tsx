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
interface Props {
  slug: string;
  page: number;
  limit: number;
}
function useGetFilmByCountry({ slug, page, limit }: Props) {
  const { data, error } = useSWR<DataFilms>(
    `https://phimapi.com/v1/api/quoc-gia/${slug}?page=${page}&limit=${limit}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error };
}

export default useGetFilmByCountry;
