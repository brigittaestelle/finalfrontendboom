import MedicalData from "../models/MedicalData";
import axios from "axios";
const baseUrl = "https://health.gov/myhealthfinder/api/v3/topicsearch.html?";
// const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_API_URL");
}

export default function fetchMedicalData(): Promise<MedicalData[]> {
  return axios.get<MedicalData[]>(`${baseUrl}`).then((res) => res.data);
}
// unsure about line 11