import fetchMedicalData from "../services/fetchMedicalData"

export default function Results(){
    return(
        <div>
            <button onClick= {() => {fetchMedicalData()}}> Please Work</button>
        </div>
    )
}