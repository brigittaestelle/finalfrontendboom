import { useState } from "react";
import { addNewAppointment } from "../services/apptAPI";
import { useHistory } from "react-router-dom";

export default function ApptForm() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [doctor, setDoctor] = useState("");
    const [reason, setReason] = useState("");
    const [questions, setQuestions] = useState("");
    const history = useHistory();

  return (
    <div>
      <h2>Record your appointment details here</h2>
      {/* <button onClick = {() => {
          addNewAppointment("11/15/2021", "11:00AM", "Dr. Reggie", "Sprained Fingers", "My hands hurt")
      }}>TEST</button> */}
      <form onSubmit = {(e) => {
          e.preventDefault();
          addNewAppointment(date,time,doctor,reason,questions)
          history.push("/medjournal")
      }}>
        <label className="EntryForm">
          Date?
          <input className="box" type="text" name="date" value={date} onChange ={(e) => setDate(e.target.value)}/>
        </label>
        <label className="EntryForm">
          Time?
          <input className="box" type="text" name="time" value={time} onChange ={(e) => setTime(e.target.value)}/>
        </label>
        <label className="EntryForm">
          Who are you meeting with?
          <input className="box" type="text" name="doctor" value={doctor} onChange ={(e) => setDoctor(e.target.value)}/>
        </label>
        <label className="EntryForm">
          Reason For Visit?
          <input className="box" type="text" name="reason" value={reason} onChange ={(e) => setReason(e.target.value)}/>
        </label>
        <label className="EntryForm">
          Questions for the doctor?
          <textarea className="box" name="questions" value={questions} onChange ={(e) => setQuestions(e.target.value)}/>
        </label>
        <button type="submit" value="Submit">Add Appointment</button>
      </form>
    </div>
  );
}
