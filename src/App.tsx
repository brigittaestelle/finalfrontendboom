import React from "react";

import "./App.css";
import Results from "./components/Results"
import MainPage from "./routes/MainPage";

function App() {
  return <div className="App">
    <MainPage />
    <Results />
  </div>;
}

export default App;
