import axios from "axios";
export const client = axios.create({
  // baseURL: "https://convin-json-production.up.railway.app/",
  baseURL: "http://localhost:8000",
  timeout: 1000,
});
