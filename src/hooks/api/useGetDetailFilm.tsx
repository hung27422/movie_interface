"use client";

import { DetailFilm } from "@/types";
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
}
function useGetDetailFilm({ slug }: Props) {
  const { data, error } = useSWR<DetailFilm>(
    `https://phimapi.com/phim/${slug}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error };
}

export default useGetDetailFilm;
