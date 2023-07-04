import {
  ExportIcon,
  FolderIcon,
  LanguageIcon,
  LeftArrowIcon,
  LogoIcon,
  RightArrowIcon,
  TagIcon,
} from "@/assets/icons";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-6">
      <ul className="flex justify-between flex-1 list-none bg-black-500">
        <li className="text-secondary">
          <Link className="inline-flex items-center gap-2" href="/">
            <FolderIcon className="inline-block" /> <span>Open</span>
          </Link>
        </li>
        <li className="text-secondary">
          <Link className="inline-flex gap-2" href="/">
            <TagIcon className="inline-block" /> <span>Save</span>
          </Link>
        </li>
        <li className="text-secondary">
          <Link className="inline-flex gap-2" href="/">
            <ExportIcon className="inline-block" /> <span>Export</span>
          </Link>
        </li>
        <li className="text-secondary">
          <Link className="inline-flex gap-2" href="/">
            <LanguageIcon className="inline-block" /> <span>English</span>
          </Link>
        </li>
      </ul>
      <div className="flex justify-center flex-[2] gap-6 text-center gap">
        <button className="text-secondary">
          <LeftArrowIcon />
        </button>
        <button className="text-secondary">
          <RightArrowIcon />
        </button>
      </div>
      <LogoIcon />
    </nav>
  );
};

export default Navbar;
