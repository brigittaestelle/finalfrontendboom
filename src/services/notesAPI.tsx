import { NotesModel } from "../models/MedJournalModel";
import axios from "axios";
const baseUrl = "http://localhost:5001/final-project-19191/us-central1/api";

if (!baseUrl) {
    console.error("Missing config REACT_APP_SHOUTOUT_API_URL");
}

export function fetchAllNotes():Promise<NotesModel[]>{
    return axios.get<NotesModel[]>(`${baseUrl}/mednotes`)
    .then(res => res.data);
}

export function addNewEntry(title:string,entry:string):Promise<NotesModel>{
    return axios.post(`${baseUrl}/mednotes`, {
        title: title,
        entry: entry,
      }).then(res => res.data);
}