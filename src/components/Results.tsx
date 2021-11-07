import { ResourceEntity, Resources } from "../models/MedicalData";
import fetchMedicalData from "../services/fetchMedicalData";
import { MedicalData } from "../models/MedicalData";
import MedicalTopicSearchForm from "./MedicalTopicSearchForm";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Results() {
  return (
    <div>
      <h1>Search Results</h1>

      {/* {topicSearchResponse?.map((hit, index) => ( */}
      {/* <p key={index}>one hit</p> */}
      {/* ))} */}
    </div>
  );
}
