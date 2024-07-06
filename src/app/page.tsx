"use client";
import FilmItem from "@/components/FilmItem";
import useGetFilmAnime from "@/hooks/api/useGetFilmAnime";
import useGetFilmMovie from "@/hooks/api/useGetFilmMovie";
import useGetFilmNewRelease from "@/hooks/api/useGetFilmNewRelease";
import useGetFilmSeries from "@/hooks/api/useGetFilmSeries";
import Image from "next/image";
import Link from "next/link";
import Spinner from "./pages/Spinner/page";
import useGetFilmTVShow from "@/hooks/api/useGetFilmTVShow";
import NewRelease from "./Layouts/NewRelease/NewRelease";

export default function Home() {
  const { data: dataMovie } = useGetFilmMovie({ page: 1, limit: 10 });
  const Movies = dataMovie?.data.items;
  const { data: dataAnime } = useGetFilmAnime({ page: 1, limit: 10 });
  const Animes = dataAnime?.data.items;
  const { data: dataFilmSeries } = useGetFilmSeries({ page: 1, limit: 10 });
  const FilmSeries = dataFilmSeries?.data.items;
  const { data: dataTVShow } = useGetFilmTVShow({ page: 1, limit: 10 });
  const TVShows = dataTVShow?.data.items;

  if (!dataMovie && !dataAnime && !dataFilmSeries) {
    return <Spinner />;
  }
  return (
    <main className="flex min-h-screen flex-col p-2">
      <div className="md:hidden">
        <NewRelease />
      </div>
      <div className="">
        <h2 className="text-4xl py-2 text-center">--Phim lẻ--</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
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
      {/* Anime */}
      <div className="mt-3">
        <h2 className="text-4xl py-2 text-center">--Hoạt Hình--</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Animes?.map((anime, index) => {
            return <FilmItem key={index} data={anime} />;
          })}
        </div>
        <div className="div-load-more group">
          <Link href={"/pages/Anime"} className="btn-load-more">
            Xem thêm
          </Link>
        </div>
      </div>
      {/* Phim bộ */}
      <div className="mt-3">
        <h2 className="text-4xl py-2 text-center">--Phim Bộ--</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {FilmSeries?.map((series, index) => {
            return <FilmItem key={index} data={series} />;
          })}
        </div>
        <div className="div-load-more group">
          <Link href={"/pages/Phimbo"} className="btn-load-more">
            Xem thêm
          </Link>
        </div>
      </div>
      {/* TV Show */}
      <div className="mt-3">
        <h2 className="text-4xl py-2 text-center">--TV Show--</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 md:gap-3 gap-5">
          {TVShows?.map((item, index) => {
            return <FilmItem key={index} data={item} />;
          })}
        </div>
        <div className="div-load-more group">
          <Link href={"/pages/TVShow"} className="btn-load-more">
            Xem thêm
          </Link>
        </div>
      </div>
    </main>
  );
}
