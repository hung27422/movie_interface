"use client";
import ViewTrailer from "@/components/ViewTrailer";
import useGetDetailFilm from "@/hooks/api/useGetDetailFilm";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function FilmDetail({ params }: { params: { slug: string } }) {
  const { data: dataDetail } = useGetDetailFilm({ slug: params.slug });
  const Directors = dataDetail?.movie.director;
  const Actors = dataDetail?.movie.actor;

  if (!dataDetail) return null;
  return (
    <div className="flex flex-col relative">
      <div className="">
        <Image
          src={dataDetail?.movie.thumb_url}
          alt="poster-film"
          width={400}
          height={200}
          className="w-full h-[400px] opacity-40"
        />
      </div>
      <div className="absolute grid grid-cols-1 md:grid-cols-4 top-[30%] px-4 overflow-hidden">
        <div className="col-span-1 w-full max-md:mb-7">
          <Image
            src={dataDetail.movie.poster_url}
            alt="img-film"
            width={200}
            height={400}
            className="w-[300px] h-[400px] shadow-md shadow-primary rounded-lg text-center mr-auto ml-auto"
          />
          <div className="text-2xl mt-5 w-full text-center">
            Đạo diễn:
            {Directors?.map((director, index) => {
              return (
                <span className="mr-auto ml-auto" key={index}>
                  {Directors.length === 1 ? Directors[0] : director}
                </span>
              );
            })}
          </div>
          <div className="flex ml-6 mt-2 md:hidden">
            <Link
              href={`/pages/Watch/${params.slug}`}
              className="div-load-more group"
            >
              <button className="btn-load-more">Xem phim</button>
            </Link>
          </div>
        </div>
        <div className="col-span-3 flex flex-col md:ml-10 pb-5 mr-auto ml-auto">
          <span className="md:text-5xl text-3xl">{dataDetail.movie.name}</span>
          <span className="md:text-3xl text-2xl text-gray-400 mt-3">
            {dataDetail.movie.origin_name}
          </span>
          <span className="text-2xl mt-5">
            <FontAwesomeIcon className="mr-2" icon={faClock} />
            {dataDetail.movie.time}
          </span>
          <span className="text-2xl mt-5">
            Khởi chiếu: {dataDetail.movie.year}
          </span>
          <span className="text-2xl mt-5 ">
            Số tập đã ra: {dataDetail.movie.episode_current}
          </span>
          <span className="w-fit mt-7">{dataDetail.movie.content}</span>
          <div className="text-base mt-3">
            Diễn viên:
            {Actors?.map((actor, index) => {
              return (
                <span key={index}>
                  {Actors.length === 1
                    ? Actors[0]
                    : index === actor.length - 1
                    ? actor
                    : actor + "," + " "}
                </span>
              );
            })}
          </div>
          {/* Button */}
          <div className="flex items-center">
            {dataDetail.movie.trailer_url && (
              <div className="flex items-center">
                <ViewTrailer linkTrailer={dataDetail.movie.trailer_url} />
              </div>
            )}
            <div className="flex ml-6 mt-2 max-md:hidden">
              <Link
                href={`/pages/Watch/${params.slug}`}
                className="div-load-more group"
              >
                <button className="btn-load-more">Xem phim</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
