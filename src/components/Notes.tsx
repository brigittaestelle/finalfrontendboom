import { NotesModel } from "../models/MedJournalModel"

interface Props {
    notes: NotesModel[];
}

export default function Notes({notes}:Props){
    return (
        <div>
            <ul>
				{notes.map((entry, index) => {
					return (
						<li key={index}>
							<h1>{entry.title}</h1>
							<p>{entry.notes}</p>
						</li>
					);
				})}
			</ul>
        </div>
    )
}