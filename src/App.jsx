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
import Icon from "@mdi/react";
import { mdiPrinterOutline } from "@mdi/js";

import "./normalize.css";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("Yoshii");
  const [lastName, setLastName] = useState("Toranaga");
  const [title, setTitle] = useState("Lord");
  const [city, setCity] = useState("Edo");
  const [country, setCountry] = useState("Japan");
  const [email, setEmail] = useState("lordyoshii@gmail.com");
  const [phone, setPhone] = useState("+81 234 567 89");
  const [page, setPage] = useState(
    "https://shogun.fandom.com/wiki/Yoshii_Toranaga"
  );

  const [educationArray, setEducationArray] = useState([
    {
      id: "4753f1e0-8d28-4013-97ff-5a9016e6e4b1",
      schoolName: "Warrior's Council of Edo Castle",
      title: "Leadership and Diplomacy",
      start: "1573-02",
      end: "1596-09",
    },
    {
      id: "06b95b8b-fe78-4752-9913-f35644881864",
      schoolName: "Kyoto Imperial University",
      title: "Legal Codes and Political Philosophy",
      start: "1568-10",
      end: "1572-07",
    },
    {
      id: "06b95b8b-fe78-4752-9913-f35644881863",
      schoolName: "Tokugawa Clan Academy",
      title: "Confucian Classics and Ethics",
      start: "1560-10",
      end: "1568-06",
    },
  ]);

  function handleInputChange(event, setter) {
    setter(event.target.value);
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
      id: "e4396060-68f7-482c-b5de-ad5df55e1e6b",
      companyName: "Shogunate of Japan",
      city: "Edo (Tokyo)",
      country: "Japan",
      jobPosition: "Shogun",
      responsibilities:
        "Ruled as the military dictator of Japan, overseeing the administration, military affairs, and policies of the Tokugawa Shogunate.",
      jobStartDate: "1603-03",
      jobEndDate: "1605-04",
    },
    {
      id: "e4396060-68f7-482c-b5de-ad5df55e1e6a",
      companyName: "Tokugawa Clan",
      city: "Okazaki",
      country: "Japan",
      jobPosition: "Chief Advisor to the Daimyo",
      responsibilities:
        "Advised on matters of statecraft, diplomacy, and governance, negotiated alliances, and maintained political stability.",
      jobStartDate: "1600-05",
      jobEndDate: "1603-03",
    },
    {
      id: "b7bba7c3-0597-454d-9522-6fd9c1d2117a",
      companyName: "Tokugawa Clan",
      city: "Okazaki",
      country: "Japan",
      jobPosition: "General of Tokugawa Army",
      responsibilities:
        "Led military campaigns\n Strategized battles\n Ensured the defense and expansion of Tokugawa territories.",
      jobStartDate: "1573-03",
      jobEndDate: "1600-04",
    },
  ]);

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
      language: "Japanese",
      level: "Native language",
    },
    {
      id: "06b95b8s-fe78-4752-9913-f35644881865",
      language: "English",
      level: "A1",
    },
  ]);

  function handleSubmitLanguage(itemId, updatedItem) {
    setLanguageArray((prevLanguageArray) =>
      prevLanguageArray.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
  }

  const [skillArray, setSkillArray] = useState([
    {
      id: "06b95b8s-fe78-4752-9913-f35644881861",
      skill: "Leadership",
    },
    {
      id: "06b95b8s-fe78-4752-9913-f35644881862",
      skill: "Problem-Solving",
    },
    {
      id: "06b95b8s-fe78-4752-9913-f35644881863",
      skill: "Networking",
    },
    {
      id: "06b95b8s-fe78-4752-9913-f35644881864",
      skill: "Attention to Detail",
    },
    {
      id: "06b95b8s-fe78-4752-9913-f35644881865",
      skill: "Conflict Resolution",
    },
  ]);

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

  function handleArrayChange(array, setArray, newObject) {
    setArray([...array, newObject]);
  }

  function handleRemoveItem(array, setArray, itemId) {
    setArray(array.filter((item) => item.id !== itemId));
  }

  function handleEditItem(array, setArray, itemId) {
    setArray(
      array.map((item) => (item.id === itemId ? { ...item, edit: true } : item))
    );
  }

  function moveItemUp(array, setArray, id) {
    let position = array.findIndex((item) => item.id === id);
    if (position !== 0 && position !== -1) {
      let newArray = [...array];
      let [movedItem] = newArray.splice(position, 1);
      newArray.splice(position - 1, 0, movedItem);
      setArray(newArray);
    }
  }

  function moveItemDown(array, setArray, id) {
    let position = array.findIndex((item) => item.id === id);
    if (position !== array.length - 1 && position !== -1) {
      let newArray = [...array];
      let [movedItem] = newArray.splice(position, 1);
      newArray.splice(position + 1, 0, movedItem);
      setArray(newArray);
    }
  }

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
                {/* <Icon path={mdiPlusCircleOutline} size={1} />{" "} */}
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
              setEducationArray={setEducationArray}
              handleArrayChange={handleArrayChange}
              handleMoveItemUp={moveItemUp}
              handleMoveItemDown={moveItemDown}
              handleRemoveItem={handleRemoveItem}
              handleEditItem={handleEditItem}
              handleSubmitEditEducationItem={handleSubmitEditEducationItem}
            />
          </section>

          <section className="inputSection">
            {" "}
            <WorkInfo
              workArray={workArray}
              setWorkArray={setWorkArray}
              handleArrayChange={handleArrayChange}
              handleMoveItemUp={moveItemUp}
              handleMoveItemDown={moveItemDown}
              handleRemoveItem={handleRemoveItem}
              handleEditItem={handleEditItem}
              handleSubmitEditWorkItem={handleSubmitEditWorkItem}
            />
          </section>

          <section className="inputSection">
            {" "}
            <LanguageInfo
              languageArray={languageArray}
              setLanguageArray={setLanguageArray}
              handleArrayChange={handleArrayChange}
              handleRemoveItem={handleRemoveItem}
              handleEditItem={handleEditItem}
              handleSubmitLanguage={handleSubmitLanguage}
            />
          </section>

          <section className="inputSection">
            {" "}
            <SkillInfo
              skillArray={skillArray}
              setSkillArray={setSkillArray}
              handleArrayChange={handleArrayChange}
              handleRemoveItem={handleRemoveItem}
              handleEditItem={handleEditItem}
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
