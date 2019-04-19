import axios from "axios";

class Api {
  static async getUserFromGithub(user) {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      console.log(response.data);
    } catch (err) {
      console.warn(`${err}`);
    }
  }
}
Api.getUserFromGithub("almeidarenato");
//Api.getUserFromGithub("almeidarenato12321321"); --> para apresentar erro
