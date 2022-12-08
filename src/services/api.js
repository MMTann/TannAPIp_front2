import axios from "axios";
export const api = axios.create();

// GET All
export async function dataGet(setDados, dados, setLoading) {
  try {
    setLoading(true);
    await api
      .get("http://ec2-54-90-172-8.compute-1.amazonaws.com:3000/paciente")
      .then((response) => {
        setDados(response.data);
        return dados;
      });
    setLoading(false);
  } catch (e) {
    console.log(e);
  }
}
