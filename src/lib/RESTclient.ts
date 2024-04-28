import axios from "axios";

const url = "http://localhost:8080";

export const RESTClient = axios.create({
  baseURL: url,
});

export default RESTClient;
