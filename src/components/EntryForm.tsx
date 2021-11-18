import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addNewEntry } from "../services/notesAPI";


export default function EntryForm() {

    const [title, setTitle] = useState("");
    const [entry, setEntry] = useState("");
    const history = useHistory();
    
  return (
    <div>
      <h2>Take notes here to prepare for your upcoming appointment</h2>
      <form  onSubmit = {(e) => {
          e.preventDefault();
          addNewEntry(title,entry)
          history.push("/medjournal")
      }}>
        <label className="EntryForm">
          Title:
          <input className="box" type="text" name="title" value={title} onChange ={(e) => setTitle(e.target.value)} />
        </label>
        <label className="EntryForm">
          Entry:
          <textarea className="box" name="entry" value={entry} onChange ={(e) => setEntry(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
