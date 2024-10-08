"use client";

import { DetailFilm, Search } from "@/types";
import useSWR from "swr";

const fetcher = async (url: string) => {
  if (!url) return null;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
interface Props {
  value: string;
  limit: string;
}
function useGetDataSearch({ value, limit }: Props) {
  const { data, error } = useSWR<Search>(
    value
      ? `https://phimapi.com/v1/api/tim-kiem?keyword=${value}&limit=${limit}`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error };
}

export default useGetDataSearch;
