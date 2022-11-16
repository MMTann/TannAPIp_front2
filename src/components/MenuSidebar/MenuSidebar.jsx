import React from "react";
import { Link } from "react-router-dom";
import { TbHome, TbUserCircle } from "react-icons/tb";

const MenuSidebar = () => {
  return (
    <div className="w-72 border-r-2 bg-white">
      <Link to="/dashboard">
        <h1 className="text-center text-2xl mt-10">TANN Pacientes</h1>
      </Link>
      <div className="mt-9">
        <Link to="/dashboard">
          <span className="flex flex-row gap-x-2 text-base font-semibold ml-9 mb-3">
            <TbHome size={25} color="223134" />
            <p>Início</p>
          </span>
        </Link>
        <Link to="/dashboard">
          <span className="flex flex-row gap-x-2 text-base font-semibold ml-9">
            <TbUserCircle size={25} color="223134" />
            <p>Mapa de Pacientes</p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MenuSidebar;
