export interface MenuItemProps {
  menuLink: string;
  url: string;
  Icon?: JSX.Element;
  image?: string;
}
import { HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import NextLink from "next/link";
import { SVGProps } from "react";
const Menuitem: React.FC<MenuItemProps> = ({ menuLink, url, Icon, image }) => {
  return (
    <div>
      <NextLink href={url}>
        <a className="font-montserrat text-white flex space-x-2 group">
          {image ? <img src={image} className="h-5" alt="" /> : Icon}
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            {menuLink}
          </span>
        </a>
      </NextLink>
    </div>
  );
};

export default Menuitem;
