import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import WorkExperience from "./components/WorkExperience";

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
        <WorkExperience />
      </div>
    </>
  );
}

export default App;
