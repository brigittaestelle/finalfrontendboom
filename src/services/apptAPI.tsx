import { ApptModel } from "../models/MedJournalModel";
import axios from "axios";
import { resourceLimits } from "worker_threads";
const baseUrl = "http://localhost:5001/final-project-19191/us-central1/api";

if (!baseUrl) {
    console.error("Missing config REACT_APP_SHOUTOUT_API_URL");
}

export function fetchAllAppointments():Promise<ApptModel[]>{
    return axios.get<ApptModel[]>(`${baseUrl}/medjournal`)
    .then(res => res.data);

}

export function addNewAppointment(date:string,time:string,doctor:string,reason:string, questions:string):Promise<ApptModel>{
    return axios.post(`${baseUrl}/medjournal`, {
        date: date,
        time: time,
        doctor: doctor,
        reason: reason,
        questions: questions
      }).then(res => res.data);
}