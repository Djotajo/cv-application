import { useState } from "react";
import GeneralInfo from "./components/generalInfo";
import EducationInfo from "./components/educationInfo";
import WorkInfo from "./components/workInfo";
import DisplayGeneralInfo from "./components/displayGeneralInfo";

import "./App.css";
import "./normalize.css";

function App() {
  const [firstName, setFirstName] = useState("bra");
  const [lastName, setLastName] = useState("lio");
  const [email, setEmail] = useState("mejl");
  const [phone, setPhone] = useState("387");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleMailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  return (
    <>
      <main>
        <div className="container">
          <section>
            {" "}
            <GeneralInfo
              name={firstName}
              onFirstNameChange={(event) => handleFirstNameChange(event)}
              lastName={lastName}
              onLastNameChange={(event) => handleLastNameChange(event)}
              email={email}
              onMailChange={(event) => handleMailChange(event)}
              phone={phone}
              onPhoneChange={(event) => handlePhoneChange(event)}
            />
          </section>
          <section>
            {" "}
            <EducationInfo />
          </section>
          <section>
            {" "}
            <WorkInfo />
          </section>
        </div>
        <div className="container">
          <section>
            {" "}
            <DisplayGeneralInfo
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
            />
          </section>
          <section>
            {" "}
            <EducationInfo />
          </section>
          <section>
            {" "}
            <WorkInfo />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
