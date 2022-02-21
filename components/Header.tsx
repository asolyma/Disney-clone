import Image from "next/image";
import Menuitem, { MenuItemProps } from "./Menuitem";
import { navbar } from "./nav";
import React from "react";
import LoginButton from "./LoginButton";

import { GetServerSideProps } from "next";
import { Session } from "next-auth";

const Header: React.FC<{ session: Session | null }> = ({ session }) => {
  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] h-[72px] w-screen flex items-center px-10 md:px-12">
      <Image
        className="cursor-pointer"
        aria-label="Logo"
        src={"/images/logo.svg"}
        height={100}
        width={100}
      />
      <div className="hidden ml-10 space-x-6 md:flex items-center mr-1">
        {navbar.map((item, i) => (
          //   console.log(item.image)
          <Menuitem
            image={item.image}
            Icon={item.Icon}
            menuLink={item.menuLink}
            url={item.url}
            key={i}
          />
        ))}
      </div>
      {!session && <LoginButton />}
    </div>
  );
};

export default Header;
