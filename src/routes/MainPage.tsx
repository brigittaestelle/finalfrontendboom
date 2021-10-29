import { fetchMedicalData } from "../services/medicalAPIservice"
import MedicalData from "../models/MedicalData";
import { useEffect, useState } from "react";
import ShoutoutList from "../components/DataList";

const MainPage = () => {
    const [MedicalData, useMedicalData] = useState()
    return (
        <div>
            <ShoutoutList/>
        </div>
    )
};
export default MainPage;