import { useState } from "react";
import GeneralInfo from "./components/generalInfo";
import EducationInfo from "./components/educationInfo";
import WorkInfo from "./components/workInfo";
import LanguageInfo from "./components/languageInfo";
import SkillInfo from "./components/skillInfo";
import DisplayGeneralInfo from "./components/displayGeneralInfo";
import DisplayEducationInfo from "./components/displayEducationInfo";
import DisplayWorkInfo from "./components/displayWorkInfo";
import DisplayContactInfo from "./components/displayContactInfo";
import DisplayLanguageInfo from "./components/displayLanguageInfo";
import DisplaySkillInfo from "./components/displaySkillInfo";
import FileInput from "./components/fileInput";
import ImageDisplay from "./components/imageDisplay";
import Icon from "@mdi/react";
import { mdiPlusCircleOutline } from "@mdi/js";
import { mdiPrinterOutline } from "@mdi/js";

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
      end: "2024-12",
    },
    {
      id: "4753f1e0-8d28-4013-97ff-5a9016e6e4b1",
      schoolName: "Kazan Federal University",
      title: "Master of Laws",
      start: "2024-01",
      end: "2024-12",
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

  const [languageArray, setLanguageArray] = useState([
    {
      id: "06b95b8s-fe78-4752-9913-f35644881863",
      language: "German",
      level: "B1",
    },
  ]);

  function handleLanguageArrayChange(newObject) {
    setLanguageArray((prevLanguageArray) => [...prevLanguageArray, newObject]);
    // addItem();
    console.log(languageArray);
  }

  function handleRemoveLanguage(itemId) {
    setLanguageArray(languageArray.filter((item) => item.id !== itemId));
  }

  function handleEditLanguage(itemId) {
    setLanguageArray((prevLanguageArray) =>
      prevLanguageArray.map((item) =>
        item.id === itemId ? { ...item, edit: true } : item
      )
    );
  }

  function handleSubmitLanguage(itemId, updatedItem) {
    setLanguageArray((prevLanguageArray) =>
      prevLanguageArray.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
  }

  const [skillArray, setSkillArray] = useState([
    {
      id: "06b95b8s-fe78-4752-9913-f35644881863",
      skill: "JavaScript",
    },
  ]);

  function handleSkillArrayChange(newObject) {
    setSkillArray((prevSkillArray) => [...prevSkillArray, newObject]);
  }

  function handleRemoveSkill(itemId) {
    setSkillArray(skillArray.filter((item) => item.id !== itemId));
  }

  function handleEditSkill(itemId) {
    setSkillArray((prevSkillArray) =>
      prevSkillArray.map((item) =>
        item.id === itemId ? { ...item, edit: true } : item
      )
    );
  }

  function handleSubmitSkill(itemId, updatedItem) {
    setSkillArray((prevSkillArray) =>
      prevSkillArray.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
  }

  function printCV() {
    window.print();
  }

  const [file, setFile] = useState(null);
  const [backgroundUrl, setBackgroundUrl] = useState("");

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (e) => {
      setBackgroundUrl(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <>
      <label htmlFor="printButton" className="printButtonLabel noPrint">
        <Icon path={mdiPrinterOutline} size={2} title="Print" />
      </label>
      <button onClick={printCV} className="noPrint" id="printButton">
        Print
      </button>
      <main>
        <div className="container left noPrint">
          <section>
            {" "}
            <div className="">
              <label htmlFor="addProfilePicture" className="file-input-label">
                <Icon path={mdiPlusCircleOutline} size={1} />{" "}
                <p>Upload your profile picture</p>
              </label>
              <div id="profilePicInputWrap">
                <FileInput onChange={handleFileChange} />
              </div>
              <div className="file-input-notice">
                <p>Maximum file size: 2MB</p>
                <p>Allowed formats: JPG, PNG</p>
              </div>
            </div>
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
          <section className="inputSection">
            {" "}
            <EducationInfo
              educationArray={educationArray}
              handleEducationArrayChange={handleEducationArrayChange}
              handleRemoveEducationItem={handleRemoveEducationItem}
              handleEditEducationItem={handleEditEducationItem}
              handleSubmitEditEducationItem={handleSubmitEditEducationItem}
            />
          </section>

          <section className="inputSection">
            {" "}
            <WorkInfo
              workArray={workArray}
              handleWorkArrayChange={handleWorkArrayChange}
              handleRemoveWorkItem={handleRemoveWorkItem}
              handleEditWorkItem={handleEditWorkItem}
              handleSubmitEditWorkItem={handleSubmitEditWorkItem}
            />
          </section>

          <section className="inputSection">
            {" "}
            <LanguageInfo
              languageArray={languageArray}
              handleLanguageArrayChange={handleLanguageArrayChange}
              handleRemoveLanguage={handleRemoveLanguage}
              handleEditLanguage={handleEditLanguage}
              handleSubmitLanguage={handleSubmitLanguage}
            />
          </section>

          <section className="inputSection">
            {" "}
            <SkillInfo
              skillArray={skillArray}
              handleSkillArrayChange={handleSkillArrayChange}
              handleRemoveSkill={handleRemoveSkill}
              handleEditSkill={handleEditSkill}
              handleSubmitSkill={handleSubmitSkill}
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
              profileImg={backgroundUrl}
            />
          </section>
          <div className="mainContent">
            <aside className="mainContentAside">
              <section>
                <DisplayContactInfo
                  city={city}
                  country={country}
                  email={email}
                  phone={phone}
                  page={page}
                />
              </section>
              <section>
                {" "}
                <DisplayLanguageInfo array={languageArray} />
              </section>
              <section>
                {" "}
                <DisplaySkillInfo array={skillArray} />
              </section>
            </aside>
            <div className="mainContentDiv">
              <section>
                {" "}
                <DisplayEducationInfo array={educationArray} />
              </section>

              <section>
                {" "}
                <DisplayWorkInfo array={workArray} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
