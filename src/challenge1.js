//Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
//babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.
// Função delay aciona o .then após 1s

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  let response = await delay();
  console.log("1s");
  response = await delay();
  console.log("2s");
  response = await delay();
  console.log("3s");
};

umPorSegundo();
