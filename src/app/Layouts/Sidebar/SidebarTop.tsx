"use client";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menus = [
  {
    id: 1,
    title: "Trang chủ",
    path: "/",
    icon: <FontAwesomeIcon className="w-6 h-6 mr-4" icon={faHouse} />,
  },
  {
    id: 2,
    title: "Tìm kiếm",
    path: "/pages/Search",
    icon: <FontAwesomeIcon className="w-6 h-6 mr-4" icon={faMagnifyingGlass} />,
  },
];
function SidebarTop() {
  const pathname = usePathname();
  return (
    <div className="py-2 bg-sidebar rounded-md mb-2">
      {menus.map((menu, index) => {
        return (
          <Link
            key={index}
            href={menu.path}
            className={`flex items-center px-6 py-2 cursor-pointer ${
              pathname === menu.path && "text-primary"
            } `}
          >
            {menu.icon}
            <span className="text-lg font-bold">{menu.title}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarTop;
