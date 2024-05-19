import { useState } from "react";
import GeneralInfo from "./components/generalInfo";
import EducationInfo from "./components/educationInfo";
import WorkInfo from "./components/workInfo";
import DisplayGeneralInfo from "./components/displayGeneralInfo";
import DisplayEducationInfo from "./components/displayEducationInfo";
import DisplayWorkInfo from "./components/displayWorkInfo";

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

  const [educationArray, setEducationArray] = useState([
    {
      id: "06b95b8b-fe78-4752-9913-f35644881863",
      schoolName: "University of Banja Luka",
      title: "Bachelor of Law",
      start: "2024-01",
      end: "2024-01",
    },
    {
      id: "4753f1e0-8d28-4013-97ff-5a9016e6e4b1",
      schoolName: "Kazan Federal University",
      title: "Master of Laws",
      start: "2024-01",
      end: "2024-01",
    },
  ]);

  function handleInputChange(event, setter) {
    setter(event.target.value);
  }

  function handleEducationArrayChange(newObject) {
    setEducationArray((prevEducationArray) => [
      ...prevEducationArray,
      newObject,
    ]);
    // addItem();
    console.log(educationArray);
  }

  function handleRemoveEducationItem(itemId) {
    setEducationArray(educationArray.filter((item) => item.id !== itemId));
  }

  function handleEditEducationItem(itemId) {
    setEducationArray((prevEducationArray) =>
      prevEducationArray.map((item) =>
        item.id === itemId ? { ...item, edit: true } : item
      )
    );
  }

  function handleSubmitEditEducationItem(itemId, updatedItem) {
    setEducationArray((prevEducationArray) =>
      prevEducationArray.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
  }

  const [workArray, setWorkArray] = useState([
    {
      id: "b7bba7c3-0597-454d-9522-6fd9c1d2117a",
      companyName: "Visi privredni sud",
      jobPosition: "Sudski pripravnik",
      responsibilities:
        "sacinjavanje dokumenata\nnosanje papira\npisanje presuda",
      jobStartDate: "2024-01",
      jobEndDate: "2024-03",
    },
    {
      id: "e4396060-68f7-482c-b5de-ad5df55e1e6a",
      companyName: "Univerzitet u Banjoj Luci",
      jobPosition: "Visi strucni saradnik za razmjenu studenata i osoblja",
      responsibilities:
        "konkursi za razmjene\npromocija putovanja\nugovori o saradnji",
      jobStartDate: "2024-01",
      jobEndDate: "2024-04",
    },
  ]);

  function handleWorkArrayChange(newObject) {
    setWorkArray((prevWorkArray) => [...prevWorkArray, newObject]);
    // addItem();
    // console.log(educationArray);
  }

  function handleRemoveWorkItem(itemId) {
    setWorkArray(workArray.filter((item) => item.id !== itemId));
  }

  function handleEditWorkItem(itemId) {
    setWorkArray((prevWorkArray) =>
      prevWorkArray.map((item) =>
        item.id === itemId ? { ...item, edit: true } : item
      )
    );
  }

  function handleSubmitEditWorkItem(itemId, updatedItem) {
    setWorkArray((prevWorkArray) =>
      prevWorkArray.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
  }

  return (
    <>
      <main>
        <div className="container left noPrint">
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
            <EducationInfo
              educationArray={educationArray}
              handleEducationArrayChange={handleEducationArrayChange}
              handleRemoveEducationItem={handleRemoveEducationItem}
              handleEditEducationItem={handleEditEducationItem}
              handleSubmitEditEducationItem={handleSubmitEditEducationItem}
            />
          </section>
          <section>
            {" "}
            <WorkInfo
              workArray={workArray}
              handleWorkArrayChange={handleWorkArrayChange}
              handleRemoveWorkItem={handleRemoveWorkItem}
              handleEditWorkItem={handleEditWorkItem}
              handleSubmitEditWorkItem={handleSubmitEditWorkItem}
            />
          </section>
        </div>
        <div className="container right print">
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
            <DisplayEducationInfo array={educationArray} />
          </section>
          <section>
            {" "}
            <DisplayWorkInfo array={workArray} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
