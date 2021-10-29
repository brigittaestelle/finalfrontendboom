import MedicalData from "../models/MedicalData";
import axios from "axios";
const baseUrl = "https://health.gov/myhealthfinder/api/v3";
// const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_API_URL");
}

export function fetchMedicalData(): Promise<ShoutOut[]> {
  return axios.get<ShoutOut[]>(`${baseUrl}/shoutouts`).then((res) => res.data);
}
