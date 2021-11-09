import { MedicalData, ResourceEntity, Resources } from "../models/MedicalData";
import axios from "axios";
import { queryHelpers } from "@testing-library/dom";
const baseUrl = "https://health.gov/myhealthfinder/api/v3/topicsearch.json?";
// const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_API_URL");
}

export default function fetchMedicalData(searchQuery:string): Promise<ResourceEntity[]> {
  return axios
    .get<ResourceEntity[]>(`${baseUrl}`, {
      params: {
        categoryID: searchQuery,
      },
    })
    .then((res) => {
      console.log("this is from the fetch med data",res.data);
      return res.data;
    });
}
