import useFormatDate from "@/hooks/components/useFormatDate";
import { FilmItems } from "@/types";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
interface Props {
  data: FilmItems;
}
function NewReleaseItem({ data }: Props) {
  const { dateStr } = useFormatDate({ isoDateStr: data.modified.time });
  return (
    <div className="flex items-center mt-2 hover:cursor-pointer hover:bg-primary p-2 rounded-md w-full group">
      <div className="w-[60px] flex flex-col items-center text-center overflow-hidden relative">
        <Image
          src={data.thumb_url}
          alt="img-film"
          width={80}
          height={40}
          className="w-[60px] h-[80px] rounded-md"
        />
        <div className="absolute top-[25%] left-[20%] hidden group-hover:block">
          <FontAwesomeIcon
            className="w-9 h-9 bg-primary rounded-full"
            icon={faCirclePlay}
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow ml-2">
        <span className="text-lg w-[150px] truncate">{data.name}</span>
        <span className="text-gray-300 w-[150px] truncate">
          {data.origin_name}
        </span>
        <span className="text-gray-300 w-full truncate">Ngày: {dateStr}</span>
      </div>
    </div>
  );
}

export default NewReleaseItem;
