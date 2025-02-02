import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "http://localhost:8080",
});

export default axiosPrivate;
