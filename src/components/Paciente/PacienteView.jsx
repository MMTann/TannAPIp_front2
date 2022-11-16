import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
import dayjs from "dayjs";

// Estilos
import { MdKeyboardArrowLeft } from "react-icons/md";

const PacienteView = () => {
  const { idConsulta } = useParams();
  const [paciente, setPaciente] = useState({});

  // Mascara de CPF
  function mascaraCpf(cpf) {
    cpf = cpf?.replace(/\D/g, "");
    cpf = cpf?.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf?.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf?.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
  }

  // Mascara de Data
  // function mascaraData(data) {
  // data = data.replace(/\D/g, "")
  // data = data..replace(/(\d{2})(\d)/, "$1/$2")
  // .data = data.replace(/(\d{2})(\d)/, "$1/$2")
  //   return data;
  // }

  useEffect(() => {
    axios
      .get(`https://tannapiv2.herokuapp.com/paciente/${idConsulta}`)
      .then((res) => {
        setPaciente(res.data);
      });
  }, []);

  return (
    <div>
      <div className="min-h-screen min-w-full	w-screen	flex flex-row bg-[#f4f6f8]">
        <MenuSidebar />
        <div className="flex flex-col m-12">
          <div>
            <Link to="/dashboard">
              <button className="flex flex-row text-sm hover:underline underline-offset-4">
                <MdKeyboardArrowLeft size={20} color="223134" />
                Voltar
              </button>
            </Link>
            <div className="">
              <h1 className="mt-[35px] text-2xl font-semibold flex items-center">
                {paciente.nome}{" "}
                <span className="text-[16px] text-gray-400 ml-2">
                  ID: {paciente.id}
                </span>
              </h1>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4"
              >
                Pesquisa Marketing
              </button>
            </div>
            <div className="w-[1040px] bg-white flex flex-row space-x-16 mt-4 p-7 rounded drop-shadow-md">
              <div>
                <span className="text-sm uppercase font-bold underline underline-offset-8">
                  Paciente
                </span>
                <p className="text-lg font-semibold mt-3">{paciente?.nome}</p>
                <p>{paciente?.contato?.email}</p>
                <p className="">{mascaraCpf(paciente.cpfcnpj)}</p>
                <p>{dayjs(paciente?.dataNascimento).format("DD/MM/YYYY")}</p>
              </div>
              <div>
                <span className="text-sm uppercase font-bold underline underline-offset-8">
                  Endereço
                </span>
                <p className="mt-3">
                  {paciente?.endereco?.rua}, {paciente?.endereco?.numero}
                </p>
                <p>{paciente?.endereco?.complemento}</p>
                <p>{paciente?.endereco?.bairro}</p>
                <p>{paciente?.endereco?.cep}</p>
              </div>
              <div>
                <span className="text-sm uppercase font-bold underline underline-offset-8">
                  Contato
                </span>
                <p className="mt-3">{paciente?.contato?.telefoneCelular}</p>
                <p>{paciente?.contato?.telefoneResidencial}</p>
                <p>{paciente?.contato?.telefoneComercial}</p>
                <p>{paciente?.endereco?.cep}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacienteView;
