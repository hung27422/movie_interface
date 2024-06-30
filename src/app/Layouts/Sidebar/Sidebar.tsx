import {
  faCaretRight,
  faHouse,
  faList,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";

function Sidebar() {
  return (
    <div className="flex flex-col">
      <SidebarTop />
      <SidebarBottom />
    </div>
  );
}

export default Sidebar;
