import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { MenuItemProps } from "./Menuitem";

export const navbar: MenuItemProps[] = [
  { menuLink: "HOME", url: "/", Icon: <HomeIcon className="h-4 text-white" /> },
  {
    menuLink: "SEARCH",
    url: "/search",
    Icon: <SearchIcon className="h-4 text-white" />,
  },
  {
    menuLink: "WATCHLLIST",
    url: "/",
    Icon: <PlusIcon className="h-4 text-white" />,
  },
  {
    menuLink: "ORIGINALS",
    url: "/",
    Icon: <StarIcon className="h-4 text-white" />,
  },
  {
    menuLink: "MOVIES",
    url: "/",
    image: "/images/movie-icon.svg",
  },
  {
    menuLink: "SERIES",
    url: "/",
    image: "/images/series-icon.svg",
  },
];
