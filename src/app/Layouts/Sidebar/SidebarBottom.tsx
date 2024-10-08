"use client";
import { faCaretRight, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    id: 1,
    title: "Phim lẻ",
    pathname: "/pages/Phimle",
  },
  {
    id: 2,
    title: "Anime",
    pathname: "/pages/Anime",
  },
  {
    id: 3,
    title: "Phim bộ",
    pathname: "/pages/Phimbo",
  },
  {
    id: 4,
    title: "TV Show",
    pathname: "/pages/TVShow",
  },
];
function SidebarList() {
  const pathname = usePathname();
  return (
    <div className="py-2 bg-sidebar rounded-md md:h-sidebar-item">
      <div className="flex items-center px-6 py-2 select-none ">
        <FontAwesomeIcon className="w-5 h-5 mr-4" icon={faList} />
        <span className="text-lg font-bold">Danh Sách</span>
      </div>
      <div className="flex flex-col ml-6">
        {menus.map((menu, index) => {
          return (
            <Link
              key={index}
              href={menu.pathname}
              className={`flex items-center px-3 py-1 cursor-pointer hover:text-primary ${
                pathname === menu.pathname && "text-primary font-bold"
              } `}
            >
              <FontAwesomeIcon className="w-4 h-4 mr-1" icon={faCaretRight} />
              <span className="text-base">{menu.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SidebarList;
