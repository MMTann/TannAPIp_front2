import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./src/pages/Login";
import Dashboard from "./src/pages/Dashboard";
import Paciente from "./src/pages/Paciente";
import PacienteView from "./src/components/Paciente/PacienteView";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/paciente/:idConsulta" element={<PacienteView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
