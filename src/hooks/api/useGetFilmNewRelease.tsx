"use client";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

function useGetFilmNewRelease() {
  const { data, error } = useSWR(
    "https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1",
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
