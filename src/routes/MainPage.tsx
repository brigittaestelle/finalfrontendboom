import fetchMedicalData from "../services/fetchMedicalData.tsx"
import MedicalData from "../models/MedicalData";
import { useEffect, useState } from "react";

const MainPage = () => {
    return (
        <div>
            <header>
        <ul>
            <li>
                <a href="">Home</a>
                <a href="">Archives</a>
                <a href="">Med Journal</a>
                <a href="">Log In</a>
                <a href="">Sign Up</a>
            </li>
        </ul>
    </header>
    <h1>Starting Point</h1>
    <p>
        Think of this as a jumping off place to kickstart your search for some answers you've been seeking.
    </p>
        </div>
    )
};
export default MainPage;