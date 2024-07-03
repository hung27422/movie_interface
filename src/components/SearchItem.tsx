import { FilmItems } from "@/types";
import Image from "next/image";
import Link from "next/link";
interface Props {
  data: FilmItems;
}
function SearchItem({ data }: Props) {
  return (
    <Link
      href={`/pages/Detail/${data.slug}`}
      className="hover:bg-primary p-2 rounded-md cursor-pointer"
    >
      <div className="overflow-hidden">
        <Image
          src={"https://img.phimapi.com/" + data.poster_url}
          width={400}
          height={200}
          alt="img-film"
          className="h-[300px] rounded-md"
        ></Image>
      </div>
      <div className="flex flex-col p-2">
        <span className="text-2xl font-bold">{data.name}</span>
        <span className="text-lg text-gray-300">{data.origin_name}</span>

        <div className="flex flex-col">
          <span className="text-base font-bold">
            Số tập:{" "}
            {data.episode_current ? data.episode_current : "Đang cập nhật"}
          </span>
          <span className="text-base font-bold">
            Thời gian: {data.time !== "N/A" ? data.time : "Đang cập nhật"}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default SearchItem;
