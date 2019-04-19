import axios from "axios";
const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (err) {
    console.warn("Usuário não existe");
  }
};
buscaUsuario("almeidarenato");
//buscaUsuario("almeidarenato123"); //proposital para chegar no erro
