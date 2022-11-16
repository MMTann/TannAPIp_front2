import React from "react";
import styles from "./Login.module.css";
import { BsMicrosoft } from "react-icons/bs";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100  flex flex-col items-center justify-center">
      <div className="border border-gray-300 w-80 px-4 py-6 rounded-lg bg-white drop-shadow-xl space-y-4">
        <h1 className="text-2xl text-center	mb-4">TANN Service</h1>
        <button
          type="button"
          className="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-full"
        >
          <BsMicrosoft size={25} color="ffffff" className="mr-3" />
          Entrar com Microsoft
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
