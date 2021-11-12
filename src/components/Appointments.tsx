import {ApptModel}  from "../models/MedJournalModel"
import { Link } from "react-router-dom"

interface Props {
    appt: ApptModel[];
}

export default function Appointments({appt}:Props){
        return (
            <div>
                <ul>
                    {appt.map((appointment, index) => {
                        return (
                            <li key={index}>
                                <Link to="/appointmentform">Add Appointment</Link>
                                <h1>{appointment.date}</h1>
                                <p>{appointment.time}</p>
                                <p>{appointment.doctor}</p>
                                <p>{appointment.reason}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }