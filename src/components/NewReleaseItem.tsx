import useFormatDate from "@/hooks/components/useFormatDate";
import { FilmItems } from "@/types";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
interface Props {
  data: FilmItems;
}
function NewReleaseItem({ data }: Props) {
  const { dateStr } = useFormatDate({ isoDateStr: data.modified.time });

  return (
    <Link
      href={`/pages/Detail/${data.slug}`}
      className="md:grid md:grid-cols-3 overflow-x-auto gap-1 items-center mt-2 hover:cursor-pointer hover:bg-primary p-2 rounded-md group"
    >
      <div className="md:col-span-1 flex flex-col items-center text-center overflow-hidden relative">
        <Image
          src={data.poster_url}
          alt="img-film"
          width={80}
          height={40}
          className="md:h-[80px] h-[140px] w-[120px] rounded-md"
        />
        <div className="absolute top-[25%] left-[25%] hidden group-hover:block">
          <FontAwesomeIcon
            className="w-9 h-9 bg-primary rounded-full"
            icon={faCirclePlay}
          />
        </div>
      </div>
      <div className="md:col-span-2 flex flex-col flex-grow ml-1">
        <span className="text-lg w-full truncate">{data.name}</span>
        <span className="text-gray-300 w-full truncate">
          {data.origin_name}
        </span>
        <span className="text-gray-300 w-full truncate">Ngày: {dateStr}</span>
      </div>
    </Link>
  );
}

export default NewReleaseItem;
