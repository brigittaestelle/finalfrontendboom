import { ApptModel } from "../models/MedJournalModel";
import { Link } from "react-router-dom";

interface Props {
  appt: ApptModel[];
}

export default function Appointments({ appt }: Props) {
  return (
    <div>
          <Link to="/appointmentform">Add Appointment</Link>
      <ul>
        {appt.map((appointment, index) => {
          return (
            <li key={index}>
              <h3>{appointment.date}</h3>
              <p className="ApptDetails">{appointment.time}</p>
              <p className="ApptDetails">{appointment.doctor}</p>
              <p className="ApptDetails">{appointment.reason}</p>
              <p className="ApptDetails">{appointment.questions}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
