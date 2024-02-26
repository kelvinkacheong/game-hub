import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '365bd5e7f71c45b5a29b271df0c87a40'
  }
});