"use client";
import ViewTrailer from "@/components/ViewTrailer";
import useGetDetailFilm from "@/hooks/api/useGetDetailFilm";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import Image from "next/image";
import React from "react";
function FilmDetail({ params }: { params: { slug: string } }) {
  const { data: dataDetail } = useGetDetailFilm({ slug: params.slug });
  // console.log(dataDetail?.movie);
  const linkFilmM3u8 = dataDetail?.episodes.flatMap((episode) => {
    return episode.server_data.map((item) => {
      return item.link_embed;
    });
  });
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
      <div className="absolute grid grid-cols-4 top-[30%] px-4 overflow-hidden">
        <div className="col-span-1">
          <Image
            src={dataDetail.movie.poster_url}
            alt="img-film"
            width={200}
            height={400}
            className="w-[300px] h-[400px] shadow-md shadow-primary rounded-lg"
          />
          <div className="text-base mt-5">
            Đạo diễn:
            {Directors?.map((director, index) => {
              return (
                <span key={index}>
                  {Directors.length === 1 ? Directors[0] : director}
                </span>
              );
            })}
          </div>
        </div>
        <div className="col-span-3 flex flex-col ml-10 pb-5">
          <span className="text-5xl">{dataDetail.movie.name}</span>
          <span className="text-3xl text-gray-400 mt-3">
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
          <span className="w-fit mt-5">{dataDetail.movie.content}</span>
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
            <div className="flex items-center">
              <ViewTrailer linkTrailer={dataDetail.movie.trailer_url} />
            </div>
            <div className="flex ml-6 mt-2">
              {dataDetail.movie.type === "single" && (
                <div className="div-load-more group">
                  <button className="btn-load-more">Xem phim</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
