import SidebarMain from "./SidebarTop";
import SidebarList from "./SidebarBottom";
import CategoryMenu from "@/components/CategoryMenu";
import SidebarCategory from "./SidebarCategory";

function Sidebar() {
  return (
    <div className="flex flex-col">
      <SidebarMain />
      <SidebarList />
      <div className="md:hidden block">
        <SidebarCategory />
      </div>
    </div>
  );
}

export default Sidebar;
