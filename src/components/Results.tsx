import { ResourceEntity, Resources } from "../models/MedicalData";
import fetchMedicalData from "../services/fetchMedicalData";
import { MedicalData } from "../models/MedicalData";
import MedicalTopicSearchForm from "./MedicalTopicSearchForm";
import { useState } from "react";
import { Link } from "react-router-dom";

// interface Props {
//   ourTopic: ResourceEntity[];
// }



export default function Results({ ourTopic }: any) {
  const [topicResult, setTopicResult] = useState<ResourceEntity[]>()

  {console.log("this is from results", ourTopic?.Result?.Resources?.Resource)}
  // {console.log("this is from results", ourTopic)}
  return (
    <div>
      <h1>Search Results</h1>
        {/* <p>{ourTopic}</p> */}
      <ul>
        {ourTopic?.Result?.Resources?.Resource?.map((article: any, index: any) => {
          return (
            <li key={index}>
            <p>{article.Title}</p>
            <a href={article.AccessibleVersion}>{article.AccessibleVersion}</a>
             

            </li>
          );
        })}
      </ul>
    </div>
  );
}
