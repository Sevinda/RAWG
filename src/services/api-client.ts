import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f325a76cf99d46b289af53d9389f52b6",
  },
});
