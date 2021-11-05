import { Resources } from "../models/MedicalData";
import fetchMedicalData from "../services/fetchMedicalData";
import { MedicalData } from "../models/MedicalData";
import MedicalTopicSearchForm from "./MedicalTopicSearchForm";

export default function Results() {
  function onSubmit(searchQuery: string): void {
    fetchMedicalData(searchQuery);
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
    </div>
  );
}
