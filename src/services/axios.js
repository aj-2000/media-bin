import axios from "axios";
export const client = axios.create({
  baseURL: "https://convin-json.vercel.app/",
  // baseURL: "http://localhost:8000",
  timeout: 1000,
});
