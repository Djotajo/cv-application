import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";

import "./App.css";

function App() {
  return (
    <>
      <div>General Information</div>
      <div>Educational Experience</div>
      <div>
        {" "}
        <GeneralInfo />
      </div>
    </>
  );
}

export default App;
