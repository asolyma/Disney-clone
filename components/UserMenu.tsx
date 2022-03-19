import { signOut } from "next-auth/react";
const UserMenu = () => {
  return (
    <div className="text-white bg-slate-800 list-none absolute w-40 right-0 top-3 rounded-lg transition duration-200 p-1">
      <li className="bg-slate-800 hover:bg-slate-300 hover:text-black rounded-md p-2">
        <p className="ml-1 font-montserrat">Profile</p>
      </li>
      <hr className="border-black m-1" />
      <li
        className="bg-slate-800 hover:bg-white hover:text-black rounded-md p-2"
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        <p className="ml-1 font-montserrat">Logout</p>
      </li>
    </div>
  );
};

export default UserMenu;
