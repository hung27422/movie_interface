"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useDataCategoryFilm from "@/hooks/components/useDataCategoryFilm";
import Link from "next/link";

export default function CategoryYear() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { categoryYears } = useDataCategoryFilm();
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span className="text-white font-semibold text-base">
          Năm
          <FontAwesomeIcon
            className="ml-2 text-white font-semibold text-xs"
            icon={faChevronDown}
          />
        </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="grid md:grid-cols-4 grid-cols-3 md:p-2 p-1 md:h-full h-48">
          {categoryYears.map((item, index) => {
            return (
              <Link
                href={`/pages/Year/${item.year}`}
                key={index}
                onClick={handleClose}
                className="col-span-1 gap-2 gap-x-4 px-2 py-1 cursor-pointer text-center rounded-md hover:bg-gray-300"
              >
                <span className="text-base">{item.year}</span>
              </Link>
            );
          })}
        </div>
      </Menu>
    </div>
  );
}
