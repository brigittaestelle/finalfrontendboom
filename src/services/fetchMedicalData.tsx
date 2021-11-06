import { MedicalData, ResourceEntity, Resources } from "../models/MedicalData";
import axios from "axios";
import { queryHelpers } from "@testing-library/dom";
const baseUrl = "https://health.gov/myhealthfinder/api/v3/topicsearch.json?";
// const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_API_URL");
}

export default function fetchMedicalData(): Promise<ResourceEntity[]> {
  return axios
    .get<ResourceEntity[]>(`${baseUrl}`, {
      params: {
        categoryId: 109,
        // category: searchQuery,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}
