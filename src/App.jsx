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
  const [title, setTitle] = useState("Dr");
  const [city, setCity] = useState("BL");
  const [country, setCountry] = useState("Rohan");
  const [email, setEmail] = useState("mejl");
  const [phone, setPhone] = useState("387");
  const [page, setPage] = useState("Profile");

  function handleInputChange(event, setter) {
    setter(event.target.value);
  }

  return (
    <>
      <main>
        <div className="container">
          <section>
            {" "}
            <GeneralInfo
              name={firstName}
              onFirstNameChange={(event) =>
                handleInputChange(event, setFirstName)
              }
              lastName={lastName}
              onLastNameChange={(event) =>
                handleInputChange(event, setLastName)
              }
              title={title}
              onTitleChange={(event) => handleInputChange(event, setTitle)}
              city={city}
              onCityChange={(event) => handleInputChange(event, setCity)}
              country={country}
              onCountryChange={(event) => handleInputChange(event, setCountry)}
              email={email}
              onMailChange={(event) => handleInputChange(event, setEmail)}
              phone={phone}
              onPhoneChange={(event) => handleInputChange(event, setPhone)}
              page={page}
              onPageChange={(event) => handleInputChange(event, setPage)}
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
              title={title}
              city={city}
              country={country}
              email={email}
              phone={phone}
              page={page}
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
