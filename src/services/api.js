import axios from "axios";
export const api = axios.create();

// GET All
export async function dataGet(setDados, dados, setLoading) {
  try {
    setLoading(true);
    await api
      .get(
        "http://ec2-18-231-71-98.sa-east-1.compute.amazonaws.com:3000/paciente"
      )
      .then((response) => {
        setDados(response.data);
        return dados;
      });
    setLoading(false);
  } catch (e) {
    console.log(e);
  }
}
