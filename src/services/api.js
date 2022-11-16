import axios from "axios";
export const api = axios.create();

// GET All
export async function dataGet(setDados, dados, setLoading) {
  try {
    setLoading(true);
    await api
      .get("https://tannapiv2.herokuapp.com/paciente")
      .then((response) => {
        setDados(response.data);
        return dados;
      });
    setLoading(false);
  } catch (e) {
    console.log(e);
  }
}
