import fetchMedicalData from "../services/fetchMedicalData.tsx"
import MedicalData from "../models/MedicalData";
import { useEffect, useState } from "react";

const MainPage = () => {
    const [MedicalData, useMedicalData] = useState()
    return (
        <div>
            <DataList/>
        </div>
    )
};
export default MainPage;