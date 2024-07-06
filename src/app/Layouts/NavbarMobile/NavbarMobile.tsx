import NavbarDrawer from "@/components/NavbarDrawer";

function NavbarMobile() {
  return (
    <div className="flex items-center bg-sidebar justify-between rounded-md">
      <div className="w-[20%]">
        <NavbarDrawer />
      </div>
      <div className="flex-grow-0">
        <span className="text-3xl">Movie Interface</span>
      </div>
      <div className="w-[20%]"></div>
    </div>
  );
}

export default NavbarMobile;
