import React, { useState } from "react";
import axios from "axios";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
import { useParams, Link } from "react-router-dom";

// Estilos
import { MdKeyboardArrowLeft } from "react-icons/md";

const Anamnese = () => {
  const { idConsulta } = useParams();

  const [anamneseData, setAnamneseData] = useState({});

  function handleChange(e, nomeDaChave) {
    setAnamneseData({
      ...anamneseData,
      [nomeDaChave]: e.target.value,
    });
  }

  function handleClick(e) {
    e.preventDefault();

    const payload = {
      anamnese: {
        ...anamneseData,
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
          console.log(anamneseData);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className="min-h-screen min-w-full	 flex flex-row bg-[#f4f6f8]">
        <MenuSidebar />
        <div className="w-8/12">
          <div className="flex flex-col mt-12 mb-12">
            <Link to="/dashboard">
              <button className="flex flex-row text-sm hover:underline underline-offset-4 ml-16">
                <MdKeyboardArrowLeft size={20} color="223134" />
                Voltar
              </button>
            </Link>
            <h1 className="mt-[35px] text-2xl font-semibold flex items-center ml-16">
              Anamnese do Paciente
            </h1>
            <form className="w-7/8	 ml-16 mt-[35px]">
              <fieldset>
                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    1
                  </span>
                  Selecione a clínica de atendimento:
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
                  Marque o seu grau de escolaridade:
                </h3>

                <ul className="w-full">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-500 bg-white text-lg font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={anamneseData.grauEscolaridade}
                    onChange={(e) => handleChange(e, "grauEscolaridade")}
                  >
                    <option value="">Selecione sua escolaridade</option>
                    <option value="Educação Infantil">Educação Infantil</option>
                    <option value="Ensino Fundamental">
                      Ensino Fundamental
                    </option>
                    <option value="Ensino Médio">Ensino Médio</option>
                    <option value="Superior/Graduação">
                      Superior/Graduação
                    </option>

                    <option value="Superior/Pós Graduação">
                      Superior/Pós Graduação
                    </option>
                    <option value="Superior/Mestrado">Superior/Mestrado</option>
                    <option value="Superior/Doutorado">
                      Superior/Doutorado
                    </option>
                    <option value="Superior/Pós Doutorado">
                      Superior/Pós Doutorado
                    </option>
                  </select>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    3
                  </span>
                  Informe sua ocupação profissional:
                </h3>

                <input
                  value={anamneseData.profissao || ""}
                  onChange={(e) => handleChange(e, "profissao")}
                  type="text"
                  id="profissao"
                  className="bg-gray-50 border border-gray-300 text-gray-500 bg-white text-lg  font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    4
                  </span>
                  Marque o seu estado civil atual:
                </h3>

                <ul className="w-full">
                  <select
                    id="estadoCivil"
                    className="bg-gray-50 border border-gray-300 text-gray-500 bg-white text-lg font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={anamneseData.estadoCivil}
                    onChange={(e) => handleChange(e, "estadoCivil")}
                  >
                    <option value="">Selecione seu estado civil</option>
                    <option value="Solteiro(a)">Solteiro(a)</option>
                    <option value="Casado(a)/União Estável">
                      Casado(a)/União Estável
                    </option>
                    <option value="Separado(a)">Separado(a)</option>
                    <option value="Divorciado(a)">Divorciado(a)</option>
                    <option value="Viúvo(a)">Viúvo(a)</option>
                  </select>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    5
                  </span>
                  Informe o tamanho e composição da Família
                </h3>

                <ul className="w-full">
                  <select
                    id="composicaoFamiliar"
                    className="bg-gray-50 border border-gray-300 text-gray-500 bg-white text-lg font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={anamneseData.composicaoFamiliar}
                    onChange={(e) => handleChange(e, "composicaoFamiliar")}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Esposo(a)/Companheiro(a)">
                      Esposo(a)/Companheiro(a)
                    </option>
                    <option value="1 filho">1 filho</option>
                    <option value="2 filhos">2 filhos</option>
                    <option value="3 filhos">3 filhos</option>
                    <option value="4 filhos">4 filhos ou mais</option>
                  </select>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    6
                  </span>
                  Você possui alergias?
                </h3>

                <ul className="flex flex-row items-center justify-between w-full ">
                  <p className="text-lg text-gray-500 font-semibold">
                    Medicamentosa
                  </p>
                  <div className="flex flex-row items-center ">
                    <li className="mr-2">
                      <input
                        type="radio"
                        id="hosting-med1"
                        name="hosting"
                        value="Sim"
                        onChange={(e) =>
                          handleChange(e, "alergiaMedicamentosa")
                        }
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="hosting-med1"
                        className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Sim
                          </div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="hosting-med"
                        name="hosting"
                        value="Não"
                        onChange={(e) =>
                          handleChange(e, "alergiaMedicamentosa")
                        }
                        className="hidden peer"
                      />
                      <label
                        htmlFor="hosting-med"
                        className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Não
                          </div>
                        </div>
                      </label>
                    </li>
                  </div>
                </ul>
                <ul className="flex flex-row items-center justify-between w-full mt-2">
                  <p className="text-lg text-gray-500 font-semibold">
                    Alimentícia
                  </p>
                  <div className="flex flex-row items-center ">
                    <li className="mr-2">
                      <input
                        type="radio"
                        id="hosting-alimenticia"
                        name="hosting-alimenticia2"
                        value="Sim"
                        onChange={(e) => handleChange(e, "alergiaAlimenticia")}
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="hosting-alimenticia"
                        className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Sim
                          </div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="hosting-alimenticia2"
                        name="hosting-alimenticia2"
                        value="Não"
                        onChange={(e) => handleChange(e, "alergiaAlimenticia")}
                        className="hidden peer"
                      />
                      <label
                        htmlFor="hosting-alimenticia2"
                        className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Não
                          </div>
                        </div>
                      </label>
                    </li>
                  </div>
                </ul>
                <ul className="flex flex-row items-center justify-between w-full mt-2">
                  <p className="text-lg text-gray-500 font-semibold">
                    Dermocosmética
                  </p>
                  <div className="flex flex-row items-center ">
                    <li className="mr-2">
                      <input
                        type="radio"
                        id="hosting-dermo"
                        name="hosting-dermo2"
                        value="Sim"
                        onChange={(e) =>
                          handleChange(e, "alergiaDermocosmetica")
                        }
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="hosting-dermo"
                        className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Sim
                          </div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="hosting-dermo2"
                        name="hosting-dermo2"
                        value="Não"
                        onChange={(e) =>
                          handleChange(e, "alergiaDermocosmetica")
                        }
                        className="hidden peer"
                      />
                      <label
                        htmlFor="hosting-dermo2"
                        className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Não
                          </div>
                        </div>
                      </label>
                    </li>
                  </div>
                </ul>
                <ul className="flex flex-row items-center justify-between w-full mt-2">
                  <p className="text-lg text-gray-500 font-semibold">
                    Outras Alergias
                  </p>
                  <div className="flex flex-row items-center ">
                    <li className="mr-2">
                      <input
                        type="radio"
                        id="hosting-outras"
                        name="hosting-outras2"
                        value="Sim"
                        onChange={(e) => handleChange(e, "alergiaOutras")}
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="hosting-outras"
                        className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Sim
                          </div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="hosting-outras2"
                        name="hosting-outras2"
                        value="Não"
                        onChange={(e) => handleChange(e, "alergiaOutras")}
                        className="hidden peer"
                      />
                      <label
                        htmlFor="hosting-outras2"
                        className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Não
                          </div>
                        </div>
                      </label>
                    </li>
                  </div>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="2"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsAlergias}
                    onChange={(e) => handleChange(e, "obsAlergias")}
                  ></textarea>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    7
                  </span>
                  Você tem diabetes?
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-diabetes"
                      name="hosting-diabetes2"
                      value="Sim"
                      onChange={(e) => handleChange(e, "diabates")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-diabetes"
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
                      id="hosting-diabetes2"
                      name="hosting-diabetes2"
                      value="Não"
                      onChange={(e) => handleChange(e, "diabates")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-diabetes2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsDiabetes}
                    onChange={(e) => handleChange(e, "obsDiabetes")}
                  ></textarea>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    8
                  </span>
                  Você tem hipertensão?
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-hipertensao"
                      name="hosting-hipertensao2"
                      value="Sim"
                      onChange={(e) => handleChange(e, "hipertensao")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-hipertensao"
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
                      id="hosting-hipertensao2"
                      name="hosting-hipertensao2"
                      value="Não"
                      onChange={(e) => handleChange(e, "hipertensao")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-hipertensao2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsHipertesao}
                    onChange={(e) => handleChange(e, "obsHipertesao")}
                  ></textarea>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    9
                  </span>
                  Você tem neoplasia/cancêr?
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-neoplasia"
                      name="hosting-neoplasia2"
                      value="Sim"
                      onChange={(e) => handleChange(e, "neoplasia")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-neoplasia"
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
                      id="hosting-neoplasia2"
                      name="hosting-neoplasia2"
                      value="Não"
                      onChange={(e) => handleChange(e, "neoplasia")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-neoplasia2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsNeoplasia}
                    onChange={(e) => handleChange(e, "obsNeoplasia")}
                  ></textarea>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    10
                  </span>
                  Você possui alguma doença crônica?
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-doencaCronica"
                      name="hosting-doencaCronica2"
                      value="Sim"
                      onChange={(e) => handleChange(e, "doencaCronica")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-doencaCronica"
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
                      id="hosting-doencaCronica2"
                      name="hosting-doencaCronica2"
                      value="Não"
                      onChange={(e) => handleChange(e, "doencaCronica")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-doencaCronica2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsDoencaCronica}
                    onChange={(e) => handleChange(e, "obsDoencaCronica")}
                  ></textarea>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    11
                  </span>
                  Você utiliza algum remédio de uso contínuo?
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-usoDeRemedio"
                      name="hosting-usoDeRemedio2"
                      value="Sim"
                      onChange={(e) => handleChange(e, "usoDeRemedio")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-usoDeRemedio"
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
                      id="hosting-usoDeRemedio2"
                      name="hosting-usoDeRemedio2"
                      value="Não"
                      onChange={(e) => handleChange(e, "usoDeRemedio")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-usoDeRemedio2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsUsoDeRemedio}
                    onChange={(e) => handleChange(e, "obsUsoDeRemedio")}
                  ></textarea>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    12
                  </span>
                  Você é fumante?
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-fumante"
                      name="hosting-fumante2"
                      value="Sim"
                      onChange={(e) => handleChange(e, "fumante")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-fumante"
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
                      id="hosting-fumante2"
                      name="hosting-fumante2"
                      value="Não"
                      onChange={(e) => handleChange(e, "fumante")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-fumante2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-fumante3"
                      name="hosting-fumante2"
                      value="Ocasionalmente"
                      onChange={(e) => handleChange(e, "fumante")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-fumante3"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Ocasionalmente
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsFumante}
                    onChange={(e) => handleChange(e, "obsFumante")}
                  ></textarea>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    13
                  </span>
                  Você é usuário de drogas?
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-usoDeDrogas"
                      name="hosting-usoDeDrogas2"
                      value="Sim"
                      onChange={(e) => handleChange(e, "usoDeDrogas")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-usoDeDrogas"
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
                      id="hosting-usoDeDrogas2"
                      name="hosting-usoDeDrogas2"
                      value="Não"
                      onChange={(e) => handleChange(e, "usoDeDrogas")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-usoDeDrogas2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-usoDeDrogas3"
                      name="hosting-usoDeDrogas2"
                      value="Ocasionalmente"
                      onChange={(e) => handleChange(e, "usoDeDrogas")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-usoDeDrogas3"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Ocasionalmente
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsUsoDeDrogas}
                    onChange={(e) => handleChange(e, "obsUsoDeDrogas")}
                  ></textarea>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    14
                  </span>
                  Você sofre de etilismo?
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-etilismo"
                      name="hosting-etilismo2"
                      value="Sim"
                      onChange={(e) => handleChange(e, "etilismo")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-etilismo"
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
                      id="hosting-etilismo2"
                      name="hosting-etilismo2"
                      value="Não"
                      onChange={(e) => handleChange(e, "etilismo")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-etilismo2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-etilismo3"
                      name="hosting-etilismo2"
                      value="Ocasionalmente"
                      onChange={(e) => handleChange(e, "etilismo")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-etilismo3"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Ocasionalmente
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsEtilismo}
                    onChange={(e) => handleChange(e, "obsEtilismo")}
                  ></textarea>
                </ul>
              </fieldset>
              <fieldset>
                <h3 className="mb-5 mt-10 text-lg font-medium text-gray-900 dark:text-white">
                  <span className="bg-blue-200 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    15
                  </span>
                  Você pratica atividade física?
                </h3>

                <ul className="grid gap-4 w-full grid-cols-3">
                  <li>
                    <input
                      type="radio"
                      id="hosting-atividadeFisica"
                      name="hosting-atividadeFisica2"
                      value="Sim"
                      onChange={(e) => handleChange(e, "atividadeFisica")}
                      className="hidden peer"
                      required
                    />
                    <label
                      htmlFor="hosting-atividadeFisica"
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
                      id="hosting-atividadeFisica2"
                      name="hosting-atividadeFisica2"
                      value="Não"
                      onChange={(e) => handleChange(e, "atividadeFisica")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-atividadeFisica2"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Não</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="hosting-atividadeFisica3"
                      name="hosting-atividadeFisica2"
                      value="Ocasionalmente"
                      onChange={(e) => handleChange(e, "atividadeFisica")}
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-atividadeFisica3"
                      className="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Ocasionalmente
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
                <ul className="flex flex-col  w-full mt-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-500 font-medium text-gray-900 dark:text-white"
                  >
                    Observações
                  </label>
                  <textarea
                    id="message"
                    rows="1"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escreva as observações aqui..."
                    value={anamneseData.obsAtividadeFisica || ""}
                    onChange={(e) => handleChange(e, "obsAtividadeFisica")}
                  ></textarea>
                </ul>
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

export default Anamnese;
