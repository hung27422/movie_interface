import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function FilmItem() {
  return (
    <div className="p-2 hover:bg-primary rounded-md cursor-pointer">
      <div className="overflow-hidden relative">
        <Image
          src={
            "https://img.phimapi.com/upload/vod/20240625-1/bd14406d051e3250f3a19e91b70e550c.jpg"
          }
          alt="img-film"
          width={160}
          height={200}
          className="h-[170px] rounded-md"
        />
        <div className="flex items-center absolute top-1 left-1 px-2 py-1 bg-primary rounded-lg">
          <FontAwesomeIcon className="mr-1" icon={faClock} />
          <span className="font-bold text-base">120p</span>
        </div>
      </div>
      <div className="flex flex-col px-1 py-1">
        <span className="text-lg">Đảo Hải Tặc</span>
        <span className="text-base text-gray-300">One Piece</span>
      </div>
    </div>
  );
}

export default FilmItem;
