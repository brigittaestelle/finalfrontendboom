import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function MedicalTopicSearchForm({
  onSubmit,
}: {
  onSubmit: (searchQuery: string) => void;
}) {
  const history = useHistory();
  const [topicQuery, setTopicQuery] = useState("");
  return (
    <div className="MedicalSearchForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(topicQuery);
          history.push("/results");
        }}
      >
        <label className="Topic" htmlFor="">
          <strong>Pick A Topic</strong>
        </label>
        <select
          value={topicQuery}
          onChange={(e) => {
            setTopicQuery(e.target.value);
          }}
          name="topic"
          id="medTopic"
        >
          <option value="109">Mental Health</option>
          <option value="104">Checkups For Children/Teens</option>
          <option value="100">Helping a Loved One</option>
          <option value="29">Shots/Vaccines</option>
        </select>

        <button>Search</button>
      </form>
      <p>{topicQuery}</p>
    </div>
  );
}
