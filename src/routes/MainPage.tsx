import fetchMedicalData from "../services/fetchMedicalData"
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
    <label htmlFor="">Pick A Topic</label>
    <select name="topic" id="medTopic">
        <option value="">Example Topic 1</option>
        <option value="">Example Topic 2</option>
        <option value="">Example Topic 3</option>
        <option value="">Example Topic 4</option>
    </select>
    <button>Search</button>
        </div>
    )
};
export default MainPage;