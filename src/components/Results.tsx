import { Resources } from "../models/MedicalData"
import fetchMedicalData from "../services/fetchMedicalData"

export default function Results({Resource}:Resources){
    return(
        <div>
            {Resource.Title}
            <button onClick= {() => {fetchMedicalData()}}> Please Work</button>
        </div>
    )
}