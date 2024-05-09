import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import WorkInfo from "./components/workInfo";

import "./App.css";

function App() {
  return (
    <>
      <div>
        {" "}
        <GeneralInfo />
      </div>
      <div>
        {" "}
        <EducationInfo />
      </div>
      <div>
        {" "}
        <WorkInfo />
      </div>
    </>
  );
}

export default App;
