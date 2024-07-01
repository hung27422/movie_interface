"use client";
import FilmItem from "@/components/FilmItem";
import useGetFilmMovie from "@/hooks/api/useGetFilmMovie";
import useGetFilmNewRelease from "@/hooks/api/useGetFilmNewRelease";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: dataMovie } = useGetFilmMovie({ page: 1, limit: 10 });
  const Movies = dataMovie?.data.items;
  return (
    <main className="flex min-h-screen flex-col p-2">
      <div className="">
        <h2 className="text-4xl py-2 text-center">--Phim lẻ--</h2>
        <div className="grid grid-cols-5 gap-1">
          {Movies?.map((movie, index) => {
            return <FilmItem key={index} data={movie} />;
          })}
        </div>
        <div className="div-load-more group">
          <Link href={"/pages/Phimle"} className="btn-load-more">
            Xem thêm
          </Link>
        </div>
      </div>
    </main>
  );
}
