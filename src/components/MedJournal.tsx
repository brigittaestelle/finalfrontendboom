import Appointments from "./Appointments";
import Notes from "./Notes";
import { NotesModel } from "../models/MedJournalModel";
import { ApptModel } from "../models/MedJournalModel";
import { fetchAllAppointments } from "../services/apptAPI";
import { fetchAllNotes } from "../services/notesAPI";
import { useState, useEffect } from "react";
import "../routes/MainPage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function MedJournal() {
  const [apptJournal, setApptJournal] = useState<ApptModel[]>([]);
  useEffect(() => {
    fetchAllAppointments().then((res) => setApptJournal(res));
  }, []);
  const [notesJournal, setNotesJournal] = useState<NotesModel[]>([]);
  useEffect(() => {
    fetchAllNotes().then((res) => setNotesJournal(res));
  }, []);

  return (
    <div>
    <Router>
      <Switch>
        <Route path= "/appointments">
          <Appointments appt={apptJournal} />
        </Route>
        <Route path= "/notes">
        <Notes notes={notesJournal} />        
        </Route>

      <h1>Med Journal</h1>
      <h2 className="MedJournalP">Use this space to add Medical Notes</h2>
      <Appointments appt={apptJournal} />
      <Notes notes={notesJournal} />

    </Switch>
    </Router>
        </div>
  );
  
}
