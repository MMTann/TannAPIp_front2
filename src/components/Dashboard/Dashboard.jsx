// Imports
import React, { useEffect, useState, Fragment } from "react";

import { dataGet } from "../../services/api";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  TbBrandWhatsapp,
  TbPhone,
  TbMail,
  TbFileDescription,
} from "react-icons/tb";
import { Navigate, Link } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [dados, setDados] = useState();

  const sexo = ["Sexo", "F", "M"];
  const agendamentoOpts = [
    "AGENDADO",
    "FALTOU",
    "FINALIZADO",
    "CONFIRMADO",
    "CANCELADO",
    "CANCELADO_PACIENTE",
    "CONFIRMADO_PACIENTE",
    "EM_ANDAMENTO",
    "EM_ESPERA",
    "PRÉ_ATENDIMENTO",
    "PAGAMENTO",
  ];

  const [filtroAgendamento, setfiltroAgendamento] = useState("");
  const [filtroSexo, setfiltroSexo] = useState("");

  const [busca, setBusca] = useState("");

  // REQ API
  useEffect(() => {
    dataGet(setDados, dados, setLoading);
  }, []);

  console.log(dados?.pacientes);
  const filtrosPaciente = () => {
    let dadosPacientes = dados?.pacientes;

    // Filtro Barra de pesquisa
    if (busca && dados) {
      dadosPacientes = dadosPacientes.filter((dado) =>
        dado.nome.toLowerCase().includes(busca.toLowerCase())
      );
    }

    // Filtro por Sexo
    if (filtroSexo !== "" && filtroSexo !== "Sexo" && dados) {
      dadosPacientes = dadosPacientes.filter(
        (item) => item.sexo === filtroSexo
      );
    }

    if (
      filtroAgendamento !== "" &&
      filtroAgendamento !== "Agendamentos" &&
      dados
    ) {
      dadosPacientes = dadosPacientes.filter((value) =>
        value.agendamentosFeitos.find(
          (value) => value[value.length - 1].status === filtroAgendamento
        )
      );

      console.log(
        dadosPacientes.filter((value) =>
          value.agendamentosFeitos.find(
            (value) => value[value.length - 1].status === filtroAgendamento
          )
        )
      );
    }

    return dadosPacientes ? dadosPacientes : [];
  };

  return (
    <div className="min-h-screen min-w-full	 flex flex-row  bg-[#f4f6f8]">
      <MenuSidebar />

      {loading ? (
        <div className="flex flex-col items-center justify-center my-0 mx-auto">
          <div role="status">
            <svg
              className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="my-0 mx-auto max-w-5xl	w-full		justify-center mt-10 mb-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <div className="p-4 bg-slate-500 ">
              <label htmlFor="table-search" className="sr-only">
                Pesquisar
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>

                <input
                  type="text"
                  id="table-search"
                  className="max-w-full	w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Pesquisar pacientes"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </div>
              <div className=" bg-slate-500 ">
                <p className="mt-5 uppercase text-slate-50 dark:text-slate-50">
                  Filtrar por:
                </p>
                <div className="flex flex-row gap-x-2">
                  <Listbox
                    value={filtroAgendamento}
                    onChange={setfiltroAgendamento}
                  >
                    <div className="relative mt-2 w-48">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">Agendamentos</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {agendamentoOpts.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={person}
                            >
                              {({ filtroSexo }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      filtroSexo ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person}
                                  </span>
                                  {filtroSexo ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                  <Listbox value={filtroSexo} onChange={setfiltroSexo}>
                    <div className="relative mt-2 w-48">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {filtroSexo ? filtroSexo : "Sexo"}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {sexo.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={person}
                            >
                              {({ filtroSexo }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      filtroSexo ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person}
                                  </span>
                                  {filtroSexo ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>

                  <div date-rangepicker="" className="flex items-center">
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        name="start"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 
                        
                        sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                        placeholder="Data inicial"
                      />
                    </div>

                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        name="end"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                        placeholder="Data final"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Exportar
                  </button>
                </div>
              </div>
            </div>
            <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" className="p-4 ">
                    <div className="	flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-full h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 w-52">
                    Paciente
                  </th>
                  <th scope="col" className="px-6 py-3 w-52">
                    Último agendamento
                  </th>
                  <th scope="col" className="px-6 py-3 w-52">
                    Contato
                  </th>
                  <th scope="col" className="px-6 py-3 w-52">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 w-52">
                    <span className="">Ações</span>
                  </th>
                </tr>
              </thead>
              {filtrosPaciente()?.map((paciente, index) => {
                return (
                  <tbody key={index}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <Link to={`/paciente/${paciente.idConsulta}`}>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap hover:underline hover:underline-offset-1"
                        >
                          {paciente.nome}
                        </th>
                      </Link>
                      <td className="px-6 py-4">22/01/2022</td>
                      <td className="flex flex-row gap-1 px-6 py-4">
                        <a
                          href={`https://api.whatsapp.com/send?phone=55${paciente.contato.telefoneCelular
                            .trim()
                            .replace(/[^a-zA-Z0-9]/g, "")}`}
                        >
                          <TbBrandWhatsapp size={25} color="6b7280" />
                        </a>

                        <a
                          href={`https://harmoni.my3cx.com.br:5001/webclient/#/call?phone=${paciente.contato.telefoneCelular
                            .trim()
                            .replace(/[^a-zA-Z0-9]/g, "")}`}
                          target="_blank"
                        >
                          <TbPhone size={25} color="6b7280" />
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Ativo</span>
                        </span>
                      </td>
                      <td className="flex fle-row px-6 py-4 text-right">
                        <Link to={`/marketing/${paciente.idConsulta}`}>
                          <TbMail size={25} color="6b7280" />
                        </Link>
                        <Link to={`/anamnese/${paciente.idConsulta}`}>
                          <TbFileDescription size={25} color="6b7280" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
