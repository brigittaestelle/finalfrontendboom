import Appointments from "./Appointments";
import Notes from "./Notes";
import "./MedJournal.css";

export default function MedJournal() {
  return (
    <div>
      <Appointments />
      <Notes />
    </div>
  );
}
