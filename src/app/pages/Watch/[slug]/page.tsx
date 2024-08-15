"use client";
import useGetDetailFilm from "@/hooks/api/useGetDetailFilm";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Spinner from "../../Spinner/page";
interface EpisodeState {
  linkM3u8: string;
  linkEmbed: string;
  slug: string;
}
function WatchDetail({ params }: { params: { slug: string } }) {
  const { data: dataDetail } = useGetDetailFilm({ slug: params.slug });
  const [valueChangeEpisodes, setValueChangeEpisodes] =
    useState<EpisodeState | null>(null);
  const [activeEpisode, setActiveEpisode] = useState(false);

  if (!dataDetail) return null;
  const lengthEpisodes = dataDetail.episodes.map((item, index) => {
    return item.server_data.length;
  });
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
  if (!linkFilmM3u8 || linkFilmM3u8.length === 0) return <Spinner />;
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleChangeEpisode = (
    linkM3u8: string,
    linkEmbed: string,
    slug: string
  ) => {
    scrollTop();
    setValueChangeEpisodes({ linkM3u8, linkEmbed, slug });
    setActiveEpisode(true);
  };
  if (!dataDetail) return <Spinner />;
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
          url={
            valueChangeEpisodes ? valueChangeEpisodes.linkM3u8 : linkFilmM3u8[0]
          }
        />
      </div>
      <div>
        <div className="mt-3 text-center max-md:mb-6">
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
        <div className="px-6 mb-3">
          <span className="md:text-5xl text-2xl md:leading-[100px] leading-[40px]  ">
            {dataDetail.movie.name}
          </span>
          <div className="md:flex md:items-center justify-between">
            <div className="md:w-[60%]">
              <div className="md:text-3xl text-lg text-gray-400 break-all leading-[30px] ">
                <span>{dataDetail.movie.origin_name}</span>{" "}
                <span>({dataDetail.movie.year})</span>
              </div>
            </div>
            <div className="flex-grow-0 ml-4 hidden md:block">
              <Link
                className="text-sm text-blue-600 hover:text-primary"
                href={`/pages/Detail/${params.slug}`}
              >
                <FontAwesomeIcon className="mr-3" icon={faAnglesLeft} />
                Trờ về trang chi tiết
              </Link>
            </div>
          </div>
        </div>
        <div className="px-6">
          {dataDetail.movie.type === "single" ? (
            <div className="w-[100px] h-10 p-2 bg-primary rounded-md text-center cursor-pointer">
              <span className="text-lg font-bold">Full</span>
            </div>
          ) : (
            <div
              className={`grid grid-cols-4 md:grid-cols-10 ${
                lengthEpisodes[0] <= 100 ? "h-auto" : "h-[47vh]"
              } overflow-hidden overflow-y-scroll hidden-scrollbar gap-1`}
            >
              {listEpisode.map((episode, index) => {
                const isSelected = !activeEpisode
                  ? linkFilmM3u8[0] === episode.link_m3u8
                  : valueChangeEpisodes?.slug === episode.slug;
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
                    <span className="md:text-lg text-base font-bold">
                      {index + 1}
                    </span>
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
