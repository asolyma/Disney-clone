import { signIn } from "next-auth/react";
const LoginButton = () => {
  return (
    <button
      className=" ml-auto text-white border px-4 py-1 rounded-md tracking-widest hover:bg-slate-300 transition duration-500 hover:text-gray-800"
      onClick={() => {
        signIn();
      }}
    >
      LOGIN
    </button>
  );
};

export default LoginButton;
