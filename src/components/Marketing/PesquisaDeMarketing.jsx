import React, { useState } from "react";
import axios from "axios";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
import { useParams, Link } from "react-router-dom";

// Estilos
import { MdKeyboardArrowLeft } from "react-icons/md";

const PesquisaDeMarketing = () => {
  const { idConsulta } = useParams();

  const [marketingData, setMarketingData] = useState({});

  function handleChange(e, nomeDaChave) {
    setMarketingData({
      ...marketingData,
      [nomeDaChave]: e.target.value,
    });
  }

  function handleClick(e) {
    e.preventDefault();

    const payload = {
      pesquisaMarketing: {
        ...marketingData,
      },
    };

    try {
      axios
        .patch(
          `https://api.tannodontoestetica.com.br:3000/paciente/${idConsulta}`,
          payload
        )
        .then((response) => {
          console.log(response.data);
          console.log(marketingData);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className="min-h-screen min-w-full	 flex flex-row bg-[#f4f6f8]">
        <MenuSidebar />
        <div>
          <div className="flex flex-col mt-12 mb-12">
            <Link to="/dashboard">
              <button className="flex flex-row text-sm hover:underline underline-offset-4 ml-16">
                <MdKeyboardArrowLeft size={20} color="223134" />
                Voltar
              </button>
            </Link>
            <h1 className="mt-[35px] text-2xl font-semibold flex items-center ml-16">
              Pesquisa de Marketing
            </h1>
            <form className="w-3/4 ml-16 mt-[35px]">
              <fieldset>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    1
                  </span>
                  Escolha a clínica de atendimento:
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-small"
                      name="hosting"
                      value="Andrade Neves"
                      onChange={(e) => handleChange(e, "clinica")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-small"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Andrade Neves
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-big"
                      name="hosting"
                      value="São Gualter"
                      onChange={(e) => handleChange(e, "clinica")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-big"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          São Gualter
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-gd"
                      name="hosting"
                      value="OdontoQuick"
                      onChange={(e) => handleChange(e, "clinica")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-gd"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          OdontoQuick
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    2
                  </span>
                  Que importância você dá para a sua aparência:
                </h3>
                <ul className="grid gap-4 w-full grid-cols-5">
                  <li>
                    <input
                      type="radio"
                      id="hosting-1"
                      name="importanciaAparencia"
                      value="1"
                      onChange={(e) => handleChange(e, "importanciaAparencia")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-1"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">1</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-2"
                      name="importanciaAparencia"
                      value="2"
                      onChange={(e) => handleChange(e, "importanciaAparencia")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-2"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">2</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-3"
                      name="importanciaAparencia"
                      value="3"
                      onChange={(e) => handleChange(e, "importanciaAparencia")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-3"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">3</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-4"
                      name="importanciaAparencia"
                      value="4"
                      onChange={(e) => handleChange(e, "importanciaAparencia")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-4"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">4</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-5"
                      name="importanciaAparencia"
                      value="5"
                      onChange={(e) => handleChange(e, "importanciaAparencia")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-5"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">5</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="flex flex-row justify-between text-slate-400 mt-2 normal-case">
                  <p>Nenhuma</p>
                  <p>Média</p>
                  <p>Muito Alta</p>
                </div>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    3
                  </span>
                  Como acredita que ela possa influenciar no seu sucesso
                  profissional?
                </h3>
                <ul className="grid gap-4 w-full grid-cols-5">
                  <li>
                    <input
                      type="radio"
                      id="hosting-iP1"
                      name="influenciaProfissonal"
                      value="1"
                      onChange={(e) => handleChange(e, "influenciaProfissonal")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-iP1"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">1</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-iP2"
                      name="influenciaProfissonal"
                      value="2"
                      onChange={(e) => handleChange(e, "influenciaProfissonal")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-iP2"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">2</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-iP3"
                      name="influenciaProfissonal"
                      value="3"
                      onChange={(e) => handleChange(e, "influenciaProfissonal")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-iP3"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">3</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-iP4"
                      name="influenciaProfissonal"
                      value="4"
                      onChange={(e) => handleChange(e, "influenciaProfissonal")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-iP4"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">4</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-iP5"
                      name="influenciaProfissonal"
                      value="5"
                      onChange={(e) => handleChange(e, "influenciaProfissonal")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-iP5"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">5</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="flex flex-row justify-between text-slate-400 mt-2 normal-case">
                  <p>Nada</p>
                  <p>Média</p>
                  <p>Totalmente</p>
                </div>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    4
                  </span>
                  Da sua aparência o que você considera o mais importante?
                </h3>
                <ul className="grid gap-4 w-full grid-cols-4">
                  <li>
                    <input
                      type="radio"
                      id="hosting-aP1"
                      name="aparenciaPreferida"
                      value="Rosto"
                      onChange={(e) => handleChange(e, "aparenciaPreferida")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-aP1"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Rosto
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-aP2"
                      name="aparenciaPreferida"
                      value="Corpo"
                      onChange={(e) => handleChange(e, "aparenciaPreferida")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-aP2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Corpo
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-aP3"
                      name="aparenciaPreferida"
                      value="Dentes/Sorriso"
                      onChange={(e) => handleChange(e, "aparenciaPreferida")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-aP3"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Dentes/Sorriso
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-aP4"
                      name="aparenciaPreferida"
                      value="Cabelo"
                      onChange={(e) => handleChange(e, "aparenciaPreferida")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-aP4"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Cabelo
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    5
                  </span>
                  Você já realizou algum tratamento estético odontológico ou
                  facial?
                </h3>
                <ul className="grid gap-4 w-full grid-cols-4">
                  <li>
                    <input
                      type="radio"
                      id="hosting-rT1"
                      name="realizouTratamento"
                      value="Sim"
                      onChange={(e) => handleChange(e, "realizouTratamento")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-rT1"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Sim</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-rT2"
                      name="realizouTratamento"
                      value="Não"
                      onChange={(e) => handleChange(e, "realizouTratamento")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-rT2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 break-words dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    6
                  </span>
                  Como você avaliaria o seu conhecimento sobre estética facial e
                  odontológica e os tratamentos disponíveis?
                </h3>
                <ul className="grid gap-4 w-full grid-cols-5">
                  <li>
                    <input
                      type="radio"
                      id="hosting-cE1"
                      name="conhecimentoEstetico"
                      value="1"
                      onChange={(e) => handleChange(e, "conhecimentoEstetico")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-cE1"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">1</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-cE2"
                      name="conhecimentoEstetico"
                      value="2"
                      onChange={(e) => handleChange(e, "conhecimentoEstetico")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-cE2"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">2</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-cE3"
                      name="conhecimentoEstetico"
                      value="3"
                      onChange={(e) => handleChange(e, "conhecimentoEstetico")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-cE3"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">3</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-cE4"
                      name="conhecimentoEstetico"
                      value="4"
                      onChange={(e) => handleChange(e, "conhecimentoEstetico")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-cE4"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">4</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-cE5"
                      name="conhecimentoEstetico"
                      value="5"
                      onChange={(e) => handleChange(e, "conhecimentoEstetico")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-cE5"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">5</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="flex flex-row justify-between text-slate-400 mt-2 normal-case">
                  <p>Nenhuma</p>
                  <p>Média</p>
                  <p>Muito Alta</p>
                </div>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 break-words dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    7
                  </span>
                  Qual a importância que você dá para a tecnologia nos
                  tratamentos odontológicos/estéticos:
                </h3>
                <ul className="grid gap-4 w-full grid-cols-5">
                  <li>
                    <input
                      type="radio"
                      id="hosting-iT1"
                      name="importanciaTecnologica"
                      value="1"
                      onChange={(e) =>
                        handleChange(e, "importanciaTecnologica")
                      }
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-iT1"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">1</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-iT2"
                      name="importanciaTecnologica"
                      value="2"
                      onChange={(e) =>
                        handleChange(e, "importanciaTecnologica")
                      }
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-iT2"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">2</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-iT3"
                      name="importanciaTecnologica"
                      value="3"
                      onChange={(e) =>
                        handleChange(e, "importanciaTecnologica")
                      }
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-iT3"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">3</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-iT4"
                      name="importanciaTecnologica"
                      value="4"
                      onChange={(e) =>
                        handleChange(e, "importanciaTecnologica")
                      }
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-iT4"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">4</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-iT5"
                      name="importanciaTecnologica"
                      value="5"
                      onChange={(e) =>
                        handleChange(e, "importanciaTecnologica")
                      }
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-iT5"
                      className="inline-flex justify-center items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">5</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="flex flex-row justify-between text-slate-400 mt-2 normal-case">
                  <p>Nenhuma</p>
                  <p>Média</p>
                  <p>Muito Alta</p>
                </div>
              </fieldset>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleClick}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PesquisaDeMarketing;
