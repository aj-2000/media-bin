import axios from "axios";
export const client = axios.create({
  baseURL: "https://convin-json.up.railway.app/",
  // baseURL: "http://localhost:8000",
});
