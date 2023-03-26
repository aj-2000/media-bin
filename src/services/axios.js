import axios from "axios";
export const client = axios.create({
  baseURL: "https://convin-json.vercel.app/",
  timeout: 1000,
});
