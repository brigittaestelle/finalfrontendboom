import { Resources } from "../models/MedicalData";
import fetchMedicalData from "../services/fetchMedicalData";
import { MedicalData } from "../models/MedicalData";
import MedicalTopicSearchForm from "./MedicalTopicSearchForm";
import { useState } from "react";

export default function Results() {
  const [topicSearchResponse, setTopicSearchResponse] = useState<MedicalData>();

  function onSubmit(searchQuery: string): void {
    // fetchMedicalData(searchQuery).then((data) => setTopicSearchResponse(data));
  }
  return (
    <div>
      <h1>Search Results</h1>
      <button
        onClick={() => {
          fetchMedicalData();
        }}
      >
        Get axios response
      </button>
      <MedicalTopicSearchForm onSubmit={onSubmit} />
      {/* {topicSearchResponse?.map((hit, index) => ( */}
      {/* <p key={index}>one hit</p> */}
      {/* ))} */}
    </div>
  );
}
