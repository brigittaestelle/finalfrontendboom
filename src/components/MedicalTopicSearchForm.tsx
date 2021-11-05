import { useState } from "react";

export default function MedicalTopicSearchForm({
  onSubmit,
}: {
  onSubmit: (searchQuery: string) => void;
}) {
  const [topicQuery, setTopicQuery] = useState("");
  return (
    <div className="MedicalSearchForm">
      <form
        onSubmit={() => {
          onSubmit(topicQuery);
        }}
      >
        <input
          type="text"
          value={topicQuery}
          onChange={(e) => {
            setTopicQuery(e.target.value);
          }}
        />
      </form>
      <p>{topicQuery}</p>
    </div>
  );
}
