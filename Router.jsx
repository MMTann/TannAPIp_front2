import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./src/pages/Login";
import Dashboard from "./src/pages/Dashboard";
import Paciente from "./src/pages/Paciente";
import PacienteView from "./src/components/Paciente/PacienteView";
import PesquisaDeMarketing from "./src/components/Marketing/PesquisaDeMarketing";
import Anamnese from "./src/components/Anamnese/Anamnese";
import MapaPacientes from "./src/pages/MapaPacientes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/paciente/:idConsulta" element={<PacienteView />} />
        <Route
          path="/marketing/:idConsulta"
          element={<PesquisaDeMarketing />}
        />
        <Route path="/anamnese/:idConsulta" element={<Anamnese />} />
        <Route path="/mapadepacientes" element={<MapaPacientes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
