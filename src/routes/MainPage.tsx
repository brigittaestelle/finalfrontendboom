import fetchMedicalData from "../services/fetchMedicalData";
import { MedicalData } from "../models/MedicalData";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import MedJournal from "../components/MedJournal";
import Results from "../components/Results";
import Archives from "../components/Archives";

const MainPage = () => {
  return (
    <div>
      <Router>
        {/* OUR HEADER OF NAVIGATIONAL LINKS */}
        <NavLink to="/">
          <img
            src="images/StartingPointLogo.png"
            alt="Starting Line Of Race"
            width="250px"
          />
        </NavLink>
        <NavLink to="/archives">Archives</NavLink>
        <NavLink to="/medjournal" exact>
          Med Journal
        </NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>

        {/* BEGINNING OF OUR SWITCH "PANEL" */}
        <Switch>
          {/* MEDJOURNAL */}
          <Route path="/medjournal" exact>
            <MedJournal />
          </Route>

          {/* ARCHIVES */}
          <Route path="/archives" exact>
            <Archives />
          </Route>

          {/* RESULTS */}
          <Route path="/results" exact>
            <Results />
          </Route>

          {/* MAIN PAGE */}
          <Route path="/" exact>
            <h1>Starting Point</h1>
            <p>
              Think of this as a jumping off place to kickstart your search for
              some answers you've been seeking.
            </p>
            <label htmlFor="">Pick A Topic</label>
            <select name="topic" id="medTopic">
              <option value="">Example Topic 1</option>
              <option value="">Example Topic 2</option>
              <option value="">Example Topic 3</option>
              <option value="">Example Topic 4</option>
            </select>
            <button>Search</button>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default MainPage;
