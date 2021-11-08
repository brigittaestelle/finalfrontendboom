import { ApptModel } from "../models/MedJournalModel";
import axios from "axios";
const baseUrl = "http://localhost:5001/final-project-19191/us-central1/api";

if (!baseUrl) {
    console.error("Missing config REACT_APP_SHOUTOUT_API_URL");
}

export function fetchAllAppointments():Promise<ApptModel[]>{
    return axios.get<ApptModel[]>(`${baseUrl}/medjournal`)
    .then(res => res.data);
}