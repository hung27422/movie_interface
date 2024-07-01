import { FilmItems } from "@/types";
import { faCirclePlay, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
interface Props {
  data: FilmItems;
}
function FilmItem({ data }: Props) {
  return (
    <div className="p-2 hover:bg-primary rounded-md cursor-pointer group">
      <div className="flex flex-col items-center overflow-hidden relative">
        <Image
          src={"https://img.phimapi.com/" + data.thumb_url}
          alt="img-film"
          width={160}
          height={200}
          className="h-[170px] rounded-md"
        />
        <div className="flex items-center absolute top-1 left-4 px-2 py-1 bg-primary rounded-lg">
          <FontAwesomeIcon className="mr-1" icon={faClock} />
          <span className="font-bold text-base">{data.time}</span>
        </div>
        <div className="absolute top-[40%] text-white animate-bounce hidden group-hover:block">
          <FontAwesomeIcon
            className="w-12 h-12 bg-primary rounded-full"
            icon={faCirclePlay}
          />
        </div>
      </div>
      <div className="flex flex-col items-start px-2 py-1">
        <span className="text-lg truncate w-full">{data.name}</span>
        <span className="text-base text-gray-300 truncate w-full">
          {data.origin_name}
        </span>
      </div>
    </div>
  );
}

export default FilmItem;
