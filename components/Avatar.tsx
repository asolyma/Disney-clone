import { DotsVerticalIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import UserMenu from "./UserMenu";
const Avatar: React.FC<{ userImage: string | undefined | null }> = ({
  userImage,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();
  return (
    <div className="ml-auto space-x-2 group cursor-pointer">
      <div className="flex items-center">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            src={userImage ? userImage : undefined}
            alt=""
            className="h-12 w-12 object-cover rounded-full border-2 border-gray-700 hover:border-white cursor-pointer"
          />
        }
      </div>
      <div className="relative bg-slate-500">{toggleMenu && <UserMenu />}</div>
    </div>
  );
};
export default Avatar;
