import CategoryMenu from "@/components/CategoryMenu";
import { faCaretRight, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryCountry from "@/components/CategoryCountry";
import CategoryYear from "@/components/CategoryYear";

function SidebarCategory() {
  return (
    <div className="bg-sidebar mt-2 rounded-lg height-sidebar-item-mobile md:h-full">
      <div className="flex items-center px-6 py-2 select-none ">
        <FontAwesomeIcon className="w-5 h-5 mr-4" icon={faList} />
        <span className="text-lg font-bold">Lựa chọn</span>
      </div>
      <div className="ml-9">
        <div className="flex items-center">
          <FontAwesomeIcon className="w-4 h-4 mr-1" icon={faCaretRight} />
          <CategoryMenu />
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon className="w-4 h-4 mr-1" icon={faCaretRight} />
          <CategoryCountry />
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon className="w-4 h-4 mr-1" icon={faCaretRight} />
          <CategoryYear />
        </div>
      </div>
    </div>
  );
}

export default SidebarCategory;
