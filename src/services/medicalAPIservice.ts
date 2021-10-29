import ShoutOut from "../models/shoutoutInterface";
import axios from "axios";
const baseUrl = "http://localhost:5001/may2021lab1/us-central1/api";
// const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_SHOUTOUT_API_URL");
}

export function fetchAllShoutouts(): Promise<ShoutOut[]> {
  return axios.get<ShoutOut[]>(`${baseUrl}/shoutouts`).then((res) => res.data);
}
