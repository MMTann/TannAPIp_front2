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

  const url = "http://ec2-54-90-172-8.compute-1.amazonaws.com:3000/paciente";

  useEffect(() => {
    axios.get(`${url}/${idConsulta}`).then((res) => {
      setPaciente(res.data);
    });
  }, []);

  return (
    <div>
      <div className="min-h-screen min-w-full	 flex flex-row bg-[#f4f6f8]">
        <MenuSidebar />
        <div className="flex flex-col my-0 mx-auto mt-12 mb-12">
          <div>
            <Link to="/dashboard">
              <button className="flex flex-row text-sm hover:underline underline-offset-4 ml0">
                <MdKeyboardArrowLeft size={20} color="223134" />
                Voltar
              </button>
            </Link>
            <div className="">
              <h1 className="mt-[35px] text-2xl font-semibold flex items-center ">
                {paciente.nome}
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

            <div className="w-[1024px] bg-white flex flex-row space-x-16 mt-4 p-7 rounded drop-shadow-md">
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
                <p>
                  {paciente?.endereco?.cep}{" "}
                  <a
                    target="_blank"
                    href={`https://www.google.com.br/maps/search/${paciente?.endereco?.cep}`}
                    className="font-medium text-[14px] text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    ver no Mapa
                  </a>
                </p>
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
            <div>
              <h1 className="mt-[35px] text-2xl font-semibold flex items-center ">
                Agendamentos
              </h1>
              <div className="w-[1024px] bg-white flex flex-col mt-4 p-10 rounded drop-shadow-md">
                {paciente.agendamentosFeitos &&
                  paciente.agendamentosFeitos
                    .slice(0)
                    .reverse()
                    .map((agendamento, index) =>
                      agendamento.map((item) =>
                        agendamento.length === 0 ? (
                          console.log("Sem agenda")
                        ) : (
                          <ol
                            className="flex flex-row relative border-l border-gray-200 dark:border-gray-700"
                            key={index}
                          >
                            <li className="mb-10 ml-6">
                              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg
                                  aria-hidden="true"
                                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
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
                              </span>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {item?.status.replace(/[^a-zA-Z0-9]/g, " ")}

                                {item.status === "FINALIZADO" ? (
                                  <span
                                    className={
                                      "bg-green-200 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ml-3"
                                    }
                                  >
                                    Compareceu
                                  </span>
                                ) : (
                                  ""
                                )}
                                {item.status === "AGENDADO" ? (
                                  <span
                                    className={
                                      "bg-yellow-200 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-800 ml-3"
                                    }
                                  >
                                    Agendamento Efetuado
                                  </span>
                                ) : (
                                  ""
                                )}
                                {item.status === "FALTOU" ||
                                item.status === "CANCELADO_PACIENTE" ||
                                item.status === "CANCELADO" ? (
                                  <span
                                    className={
                                      "bg-red-200 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-3"
                                    }
                                  >
                                    Não compareceu
                                  </span>
                                ) : (
                                  ""
                                )}
                                {index === 0 ? (
                                  <span
                                    className={
                                      "bg-orange-200 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-800 "
                                    }
                                  >
                                    Último agendamento
                                  </span>
                                ) : (
                                  ""
                                )}
                              </h3>
                              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Agendamento:{" "}
                                {dayjs(item?.data).format("DD/MM/YYYY")} às{" "}
                                {item?.horaInicio.slice(0, -3)}
                              </time>
                              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                {item.observacoes === null
                                  ? "Não há observações!"
                                  : item.observacoes}
                              </p>

                              {!item.procedimentos ? (
                                "Sem procedimento"
                              ) : (
                                <div className="text-sm uppercase mt-2 font-bold text-gray-500 dark:text-gray-400 bg-slate-100 p-4 rounded-md                                ">
                                  {item?.procedimentos?.map(
                                    (procedimento, index) => {
                                      return (
                                        <p>
                                          {index === 0
                                            ? `Procedimento(s) no paciente:`
                                            : ""}
                                          <span
                                            className="font-normal normal-case
"
                                          >
                                            {procedimento.map((item) => (
                                              <p className="mt-4">
                                                Tipo: {item.nome}
                                              </p>
                                            ))}
                                          </span>
                                        </p>
                                      );
                                    }
                                  )}
                                </div>
                              )}
                            </li>
                          </ol>
                        )
                      )
                    )}
              </div>
            </div>
            <div>
              <h1 className="mt-[35px] text-2xl font-semibold flex items-center ">
                Consultas
              </h1>
              <div className="w-[1024px] bg-white flex flex-col mt-4 p-10 rounded drop-shadow-md">
                {paciente?.consultasFeitas &&
                  paciente?.consultasFeitas
                    .slice(0)
                    .reverse()
                    .map((consulta, index) =>
                      consulta?.map((item) =>
                        consulta.length === 0 ? (
                          console.log("Sem consulta")
                        ) : (
                          <ol
                            className="flex flex-row relative border-l border-gray-200 dark:border-gray-700"
                            key={index}
                          >
                            <li className="mb-10 ml-6">
                              <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg
                                  aria-hidden="true"
                                  className="w-3 h-3 text-blue-600 dark:text-blue-400"
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
                              </span>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {item?.status.replace(/[^a-zA-Z0-9]/g, " ")}
                                {item?.status === "FINALIZADO" ? (
                                  <span
                                    className={
                                      "bg-green-200 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ml-3"
                                    }
                                  >
                                    Compareceu
                                  </span>
                                ) : (
                                  ""
                                )}
                                {item.status === "AGENDADO" ? (
                                  <span
                                    className={
                                      "bg-yellow-200 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-800 ml-3"
                                    }
                                  >
                                    Agendamento Efetuado
                                  </span>
                                ) : (
                                  ""
                                )}
                                {item.status === "FALTOU" ||
                                item.status === "CANCELADO_PACIENTE" ||
                                item.status === "CANCELADO" ? (
                                  <span
                                    className={
                                      "bg-red-200 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-3"
                                    }
                                  >
                                    Não compareceu
                                  </span>
                                ) : (
                                  ""
                                )}
                                {index === 0 ? (
                                  <span
                                    className={
                                      "bg-orange-200 text-orange-800 text-sm font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-800  "
                                    }
                                  >
                                    Última consulta
                                  </span>
                                ) : (
                                  ""
                                )}
                              </h3>
                              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Consulta em {item?.dataCriacao}
                              </time>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Profissional: {item.profissionalSolicitante}
                              </p>
                              {!item.procedimentos ? (
                                "Sem procedimento"
                              ) : (
                                <div className="text-sm uppercase mt-2 font-bold text-gray-500 dark:text-gray-400 bg-slate-100 p-4 rounded-md                                ">
                                  {item?.procedimentos?.map(
                                    (procedimento, index) => {
                                      return (
                                        <p>
                                          {index === 0
                                            ? `Procedimento(s) no paciente:`
                                            : ""}
                                          <span
                                            className="font-normal normal-case
"
                                          >
                                            {procedimento.map((item) => (
                                              <div>
                                                <p className="mt-4">
                                                  Status:{" "}
                                                  <span className="font-bold">
                                                    {item.status}
                                                  </span>
                                                </p>
                                                <p>Nome: {item.nome}</p>

                                                <p>Convênio: {item.convenio}</p>
                                                <p>
                                                  Especialidade:{" "}
                                                  {item.especialidade}
                                                </p>
                                                <p>
                                                  Quadrante:{" "}
                                                  {item.quadrantes === null
                                                    ? "Não informado"
                                                    : item.quadrantes.replace(
                                                        /[^a-zA-Z0-9]/g,
                                                        " "
                                                      )}
                                                </p>
                                                <p>
                                                  Dente:{" "}
                                                  {item.dente === null
                                                    ? "Não informado"
                                                    : item.dente}
                                                </p>
                                                <p>
                                                  Faces:{" "}
                                                  {item.faces === null
                                                    ? "Não informado"
                                                    : item.faces}
                                                </p>
                                                <p>
                                                  Raízes:{" "}
                                                  {item.raizes === null
                                                    ? "Não informado"
                                                    : item.raizes}
                                                </p>
                                              </div>
                                            ))}
                                          </span>
                                        </p>
                                      );
                                    }
                                  )}
                                </div>
                              )}
                            </li>
                          </ol>
                        )
                      )
                    )}
              </div>
            </div>
            <div>
              <h1 className="mt-[35px] text-2xl font-semibold flex items-center ">
                Anamnese
              </h1>
              <div className="w-[1024px] bg-white flex flex-col mt-4 p-10 rounded drop-shadow-md">
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      1
                    </span>
                    Selecione a clínica de atendimento:
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.clinica}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      2
                    </span>
                    Marque o seu grau de escolaridade:
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.grauEscolaridade}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      3
                    </span>
                    Informe sua ocupação profissional:
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.profissao}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      4
                    </span>
                    Marque o seu estado civil atual:
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.estadoCivil}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      5
                    </span>
                    Informe o tamanho e composição da Família
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.composicaoFamiliar}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      6
                    </span>
                    Você possui alergias?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Medicamentosa: {paciente?.anamnese?.alergiaMedicamentosa}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Alimentícia: {paciente?.anamnese?.alergiaAlimenticia}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Dermocosmética: {paciente?.anamnese?.alergiaDermocosmetica}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Outras: {paciente?.anamnese?.alergiaOutras}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsAlergias}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      7
                    </span>
                    Você tem diabetes?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.diabates}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsDiabates}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      8
                    </span>
                    Você tem hipertensão?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.hipertensao}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsHipertensao}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      9
                    </span>
                    Você tem neoplasia/cancêr?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.neoplasia}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsNeoplasia}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      10
                    </span>
                    Você possui alguma doença crônica?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.doencaCronica}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsDoencaCronica}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      11
                    </span>
                    Você utiliza algum remédio de uso contínuo?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.usoDeRemedio}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsUsoDeRemedio}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      12
                    </span>
                    Você é fumante?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.fumante}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsFumante}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      13
                    </span>
                    Você é usuário de drogas?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.usoDeDrogas}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsUsoDeDrogas}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      14
                    </span>
                    Você sofre de etilismo?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.etilismo}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsEtilismo}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      15
                    </span>
                    Você pratica atividade física?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.anamnese?.atividadeFisica}
                  </p>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    Observações: {paciente?.anamnese?.obsAtividadeFisica}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="mt-[35px] text-2xl font-semibold flex items-center ">
                Pesquisa de Marketing
              </h1>
              <div className="w-[1024px] bg-white flex flex-col mt-4 p-10 rounded drop-shadow-md">
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      1
                    </span>
                    Escolha a clínica de atendimento:
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.pesquisaMarketing?.clinica}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      2
                    </span>
                    Que importância você dá para a sua aparência:
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.pesquisaMarketing?.importanciaAparencia}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      3
                    </span>
                    Como acredita que ela possa influenciar no seu sucesso
                    profissional?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.pesquisaMarketing?.influenciaProfissonal}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      4
                    </span>
                    Da sua aparência o que você considera o mais importante?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.pesquisaMarketing?.aparenciaPreferida}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      5
                    </span>
                    Você já realizou algum tratamento estético odontológico ou
                    facial?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.pesquisaMarketing?.realizouTratamento}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      6
                    </span>
                    Como você avaliaria o seu conhecimento sobre estética facial
                    e odontológica e os tratamentos disponíveis?
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.pesquisaMarketing?.conhecimentoEstetico}
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      7
                    </span>
                    Qual a importância que você dá para a tecnologia nos
                    tratamentos odontológicos/estéticos:
                  </h3>
                  <p className="ml-10 text-gray-400 font-semibold text-lg">
                    {paciente?.pesquisaMarketing?.importanciaTecnologica}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacienteView;
