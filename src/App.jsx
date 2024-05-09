import { useState } from "react";
import GeneralInfo from "./components/generalInfo";
import EducationInfo from "./components/educationInfo";
import WorkInfo from "./components/workInfo";

import "./App.css";
import "./normalize.css";

function App() {
  return (
    <>
      <section>
        {" "}
        <GeneralInfo />
      </section>
      <section>
        {" "}
        <EducationInfo />
      </section>
      <section>
        {" "}
        <WorkInfo />
      </section>
    </>
  );
}

export default App;
