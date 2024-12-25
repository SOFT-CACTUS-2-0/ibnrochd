// import axios
import axios from "axios";
import BaseURL from "../config/app.config";

const api = axios.create({
  baseURL: BaseURL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default api;