import { ResourceEntity, Resources } from "../models/MedicalData";
import fetchMedicalData from "../services/fetchMedicalData";
import { MedicalData } from "../models/MedicalData";
import MedicalTopicSearchForm from "./MedicalTopicSearchForm";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  ourTopic: ResourceEntity[];
}

export default function Results({ ourTopic }: Props) {
  {console.log(ourTopic)}
  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {/* {ourTopic.map((article, index) => {
          return (
            <li key={index}>
              <h1>{article.Title}</h1>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
}
