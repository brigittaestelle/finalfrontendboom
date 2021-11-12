import fetchMedicalData from "../services/fetchMedicalData";
import { MedicalData } from "../models/MedicalData";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
  Link,
  useHistory,
} from "react-router-dom";
import MedJournal from "../components/MedJournal";
import Results from "../components/Results";
import Archives from "../components/Archives";
import "./MainPage.css";
import MedicalTopicSearchForm from "../components/MedicalTopicSearchForm";
import { ResourceEntity } from "../models/MedicalData";
import logo from "../components/StartingPointLogo.png";
import ApptForm from "../components/ApptForm";
import EntryForm from "../components/EntryForm";

const MainPage = () => {
  const [topicSearchResponse, setTopicSearchResponse] = useState<
    ResourceEntity[]
  >([]);

  function onSubmit(searchQuery: string): void {
    fetchMedicalData(searchQuery).then((data) => {
      setTopicSearchResponse(data);
    });
  }

  return (
    <div>
      <Router>
        {/* OUR HEADER OF NAVIGATIONAL LINKS */}
        <NavLink className="HeaderLogo" to="/">
          <img src={logo} alt="Starting Line Of Race" width="250px" />  
        </NavLink>
        {/* <NavLink className="HeaderLink" to="/archives">
          Archives
        </NavLink> */}
        <NavLink className="HeaderLink" to="/medjournal" exact>
          Med/Journal
        </NavLink>
        {/* <NavLink className="HeaderLink" to="/login">
          Log In
        </NavLink>
        <NavLink className="HeaderLink" to="/signup">
          Sign Up
        </NavLink> */}

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

          <Route path="/appointmentform" exact>
            <ApptForm />
          </Route>

          <Route path="/entryform" exact>
            <EntryForm />
          </Route>

          {/* RESULTS */}
          <Route path="/results" exact>
            <Results ourTopic={topicSearchResponse} />
          </Route>

          {/* MAIN PAGE */}
          <Route path="/" exact>
            <h1>Starting Point</h1>
            <p>
              A jumping off place to kickstart your search for some answers
              you've been seeking.
            </p>

            <MedicalTopicSearchForm onSubmit={onSubmit} />

            {/* {topicSearchResponse && <Redirect to="/results/"/>} */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default MainPage;
