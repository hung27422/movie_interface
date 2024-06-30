"use client";
import FilmItem from "@/components/FilmItem";
import useGetFilmMovie from "@/hooks/api/useGetFilmMovie";
import useGetFilmNewRelease from "@/hooks/api/useGetFilmNewRelease";
import Image from "next/image";

export default function Home() {
  const { data: dataMovie } = useGetFilmMovie();
  const Movies = dataMovie?.data.items;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Phim lẻ</h2>
        <div>
          <FilmItem />
        </div>
      </div>
    </main>
  );
}
