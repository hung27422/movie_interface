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
