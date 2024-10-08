"use client";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Sidebar from "@/app/Layouts/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavbarDrawer() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <div
      className="w-[250px] text-white bg-new_release px-2 "
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <List>
        <Sidebar />
      </List>
    </div>
  );
  return (
    <div className="bg-sidebar h-10 rounded-md">
      <Button onClick={toggleDrawer(true)}>
        <FontAwesomeIcon className="w-6 h-6 text-primary" icon={faBars} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
