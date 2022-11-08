import React from "react";
import styles from "./Login.module.css";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100  flex flex-col items-center justify-center">
      <div className="border border-gray-300 w-80 px-4 py-6 rounded-lg bg-white drop-shadow-xl space-y-4">
        <h1 className="text-2xl text-center	mb-4">TANN Service</h1>
        <button className="text-center text-white bg-sky-500 py-2 w-full rounded-md font-semibold focus:ring focus:ring-blue-300">
          Entrar com Microsoft
        </button>
        <p className="text-center text-bold text-gray-400">ou</p>
        <div className="space-y-1">
          <label htmlFor="" className="text-left text-sm font-semibold">
            Usuário
          </label>
          <input
            type="text"
            className="w-full bg-white p-1.5 rounded-md  border border-gray-200  text-slate-400"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="" className="text-left text-sm font-semibold">
            Senha
          </label>
          <input
            type="password"
            className="w-full bg-white p-1.5 rounded-md border border-gray-200 text-slate-400"
          />
        </div>

        <button className="text-center text-white bg-sky-500 py-2 w-full rounded-md font-semibold focus:ring focus:ring-blue-300">
          Entrar
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
