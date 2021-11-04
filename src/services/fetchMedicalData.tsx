import {MedicalData} from "../models/MedicalData";
import axios from "axios";
const baseUrl = "https://health.gov/myhealthfinder/api/v3/topicsearch.json?";
// const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_API_URL");
}

export default function fetchMedicalData(): Promise<MedicalData[]> {
  return axios
  .get<MedicalData[]>(`${baseUrl}`,{
    params:{
      lang: "en",
      topicId:

    }
  })
  .then((res) => res.data);
}
