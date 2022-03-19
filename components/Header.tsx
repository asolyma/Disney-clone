import Image from "next/image";
import Menuitem, { MenuItemProps } from "./Menuitem";
import { navbar } from "./nav";
import React from "react";
import LoginButton from "./LoginButton";

import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import Avatar from "./Avatar";
import router from "next/router";

const Header: React.FC<{ session: Session | null }> = ({ session }) => {
  return (
    <div className="sticky z-[50] w-auto bg-[#040714] top-0 h-[72px]  flex items-center px-10 md:px-12">
      <Image
        className="cursor-pointer"
        aria-label="Logo"
        src={"/images/logo.svg"}
        height={100}
        width={100}
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="hidden ml-10 space-x-6 md:flex items-center mr-1">
        {navbar.map(
          (item, i) =>
            //   console.log(item.image)
            session && (
              <Menuitem
                image={item.image}
                Icon={item.Icon}
                menuLink={item.menuLink}
                url={item.url}
                key={i}
              />
            )
        )}
      </div>
      {!session && <LoginButton />}
      {session && <Avatar userImage={session.user?.image} />}
    </div>
  );
};

export default Header;
