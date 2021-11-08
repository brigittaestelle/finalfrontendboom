import {ApptModel}  from "../models/MedJournalModel"

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