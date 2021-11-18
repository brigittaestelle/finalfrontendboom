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
  const [topicResult, setTopicResult] = useState<ResourceEntity[]>();

  {
    console.log("this is from results", ourTopic?.Result?.Resources?.Resource);
  }
  // {console.log("this is from results", ourTopic)}

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl =
    (url: string): (() => void) =>
    () =>
      openInNewTab(url);

  return (
    <div>
      <h1>Search Results</h1>
      {/* <p>{ourTopic}</p> */}
      <ul>
        {ourTopic?.Result?.Resources?.Resource?.map(
          (article: any, index: any) => {
            return (
              <li key={index}>
                <div className="grid">
                  <p className="articleTitle">{article.Title}</p>
                  <br></br>
                  <button
                    className="button"
                    onClick={onClickUrl(`${article.AccessibleVersion}`)}
                  >
                    Take me to the resource
                  </button>
                  <div className="resultsImg">
                    <img src={article.ImageUrl} width="200" height="200" />
                  </div>
                </div>
                {/* <p onClick(){}>{article.AccessibleVersion}</p> */}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
