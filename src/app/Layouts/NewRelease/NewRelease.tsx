"use client";
import NewReleaseItem from "@/components/NewReleaseItem";
import useGetFilmNewRelease from "@/hooks/api/useGetFilmNewRelease";
import Link from "next/link";

function NewRelease() {
  const { data: dataNewRelease } = useGetFilmNewRelease({ page: 1 });
  if (!dataNewRelease) return null;
  const NewReleases = dataNewRelease?.items;
  return (
    <div className="relative pb-5 h-fit">
      <div className="md:sticky top-0 left-0 right-2 z-10 text-center md:bg-primary rounded-md py-2">
        <span className="md:text-2xl text-4xl text-white">
          -- Mới phát hành --
        </span>
      </div>
      <div className="px-2 max-md:container-newRelease-mobile">
        {NewReleases.map((newRelease, index) => {
          return <NewReleaseItem key={index} data={newRelease} />;
        })}
      </div>
      <div className="div-load-more group">
        <Link href={"/pages/NewRelease"} className="btn-load-more">
          Xem thêm
        </Link>
      </div>
    </div>
  );
}

export default NewRelease;
