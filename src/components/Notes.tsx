import { NotesModel } from "../models/MedJournalModel"
import { Link } from "react-router-dom";

interface Props {
    notes: NotesModel[];
}

export default function Notes({notes}:Props){
    return (
        <div>
		<Link to="/entryform">Add Note</Link>
            <ul>
				{notes.map((entry, index) => {
					return (
						<li key={index}>
							<h3>{entry.title}</h3>
							<p>{entry.notes}</p>
						</li>
					);
				})}
			</ul>
        </div>
    )
}