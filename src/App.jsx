import { useState } from "react";
import GeneralInfo from "./components/generalInfo";
import EducationInfo from "./components/educationInfo";
import WorkInfo from "./components/workInfo";
import DisplayGeneralInfo from "./components/displayGeneralInfo";

import "./normalize.css";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("Djordje");
  const [lastName, setLastName] = useState("Kenjalo");
  const [title, setTitle] = useState("Senior Associate");
  const [city, setCity] = useState("Banja Luka");
  const [country, setCountry] = useState("Bosnia and Herzegovina");
  const [email, setEmail] = useState("djordjekenjalo@gmail.com");
  const [phone, setPhone] = useState("+38765456850");
  const [page, setPage] = useState(
    "https://ba.linkedin.com/in/djordje-kenjalo-12b874b5"
  );

  function handleInputChange(event, setter) {
    setter(event.target.value);
  }

  return (
    <>
      <main>
        <div className="container left">
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
        <div className="container right">
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
