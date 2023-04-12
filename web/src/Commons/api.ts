import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:5163",
});

export default api;


