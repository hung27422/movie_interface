"use client";
import useGetDetailFilm from "@/hooks/api/useGetDetailFilm";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import ReactPlayer from "react-player";
interface EpisodeState {
  linkM3u8: string;
  linkEmbed: string;
  slug: string;
}
function WatchDetail({ params }: { params: { slug: string } }) {
  const { data: dataDetail } = useGetDetailFilm({ slug: params.slug });
  const [valueChangeEpisodes, setValueChangeEpisodes] =
    useState<EpisodeState | null>(null);
  if (!dataDetail) return null;
  const linkFilmM3u8 = dataDetail?.episodes.flatMap((episode) => {
    return episode.server_data.map((item) => {
      return item.link_m3u8;
    });
  });
  const linkFilmEmbed = dataDetail?.episodes.flatMap((episode) => {
    return episode.server_data.map((item) => {
      return item.link_embed;
    });
  });
  const listEpisode = dataDetail?.episodes.flatMap((episode) => {
    return episode.server_data.map((item) => {
      return item;
    });
  });
  const linkPoster = dataDetail.movie.poster_url;
  if (!linkFilmM3u8 || linkFilmM3u8.length === 0) return null;
  const handleChangeEpisode = (
    linkM3u8: string,
    linkEmbed: string,
    slug: string
  ) => {
    setValueChangeEpisodes({ linkM3u8, linkEmbed, slug });
  };

  return (
    <div className="pb-4">
      <div>
        <ReactPlayer
          controls
          muted={true}
          width="100%"
          height="auto"
          playing={true}
          progressInterval={10000}
          fileConfig={{ attributes: { poster: linkPoster } }}
          url="https://s3.phim1280.tv/20240630/Ja27Rg8o/index.m3u8"
        />
        {/* <Player controls className="rounded-md">
          <Hls version="latest" poster={linkPoster}>
            <source
              data-src="https://s3.phim1280.tv/20240630/Ja27Rg8o/index.m3u8"
              type="application/x-mpegURL"
            />
          </Hls>
        </Player> */}
      </div>
      <div>
        <div className="mt-3 text-center">
          <a
            className="bg-primary w-fit text-xl font-bold p-2 rounded-md text-center"
            href={
              valueChangeEpisodes
                ? valueChangeEpisodes.linkEmbed
                : linkFilmEmbed[0]
            }
          >
            Dự phòng
          </a>
        </div>
        <div className="flex items-center justify-between px-6">
          <div>
            <span className="text-5xl leading-[100px]">
              {dataDetail.movie.name}
            </span>
            <div className="text-3xl text-gray-400 break-all leading-[60px] mb-3">
              <span>{dataDetail.movie.origin_name}</span>{" "}
              <span>({dataDetail.movie.year})</span>
            </div>
          </div>
          <div>
            <Link
              className="text-lg text-blue-600 hover:text-primary"
              href={`/pages/Detail/${params.slug}`}
            >
              <FontAwesomeIcon className="mr-3" icon={faAnglesLeft} />
              Trờ về trang chi tiết
            </Link>
          </div>
        </div>
        <div className="px-6">
          {dataDetail.movie.type === "single" ? (
            <div className="w-[100px] h-10 p-2 bg-primary rounded-md text-center cursor-pointer">
              <span className="text-lg font-bold">Tập Full</span>
            </div>
          ) : (
            <div className="grid grid-cols-10 gap-1">
              {listEpisode.map((episode, index) => {
                const isSelected = valueChangeEpisodes?.slug === episode.slug;
                return (
                  <div
                    key={index}
                    id={episode.slug}
                    className={`h-10 p-2  rounded-md cursor-pointer text-center ${
                      isSelected ? "bg-primary" : "bg-sidebar"
                    }`}
                    onClick={() =>
                      handleChangeEpisode(
                        episode.link_m3u8,
                        episode.link_embed,
                        episode.slug
                      )
                    }
                  >
                    <span className="text-lg font-bold">Tập {index + 1}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WatchDetail;
