import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewLanguage({
  languageArray,
  setLanguageArray,
  handleArrayChange,
  addNew,
  setAddNew,
  handleCancel,
}) {
  const languageId = uuidv4();
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("A1");
  const [errorMessage, setErrorMessage] = useState("");

  function handleCancelSubmit(event) {
    event.preventDefault();
    handleCancel();
  }

  function addNewItem(event) {
    event.preventDefault();

    if (language.trim() !== "") {
      setErrorMessage("");

      const newItem = {
        id: languageId,
        language: language,
        level: level,
      };
      handleArrayChange(languageArray, setLanguageArray, newItem);
      setAddNew(!addNew);
    } else {
      setErrorMessage("Please fill in all required fields.");
    }
  }

  return (
    <>
      <form action="#">
        <fieldset>
          <div>
            <label htmlFor="language">
              Language <span className="required-note">*</span>{" "}
            </label>
            <input
              type="text"
              id="language"
              name="language"
              onChange={(e) => setLanguage(e.target.value)}
              required
              autoFocus
              aria-required="true"
            />
          </div>

          <fieldset>
            <legend>Language proficiency level:</legend>

            <div>
              <input
                type="radio"
                id="A1"
                name="languageLevel"
                value="A1"
                onChange={(e) => setLevel(e.target.value)}
                defaultChecked
                required
                aria-required="true"
              />
              <label htmlFor="A1">A1</label>
            </div>

            <div>
              <input
                type="radio"
                id="A2"
                name="languageLevel"
                value="A2"
                onChange={(e) => setLevel(e.target.value)}
              />
              <label htmlFor="A2">A2</label>
            </div>

            <div>
              <input
                type="radio"
                id="B1"
                name="languageLevel"
                value="B1"
                onChange={(e) => setLevel(e.target.value)}
              />
              <label htmlFor="B1">B1</label>
            </div>

            <div>
              <input
                type="radio"
                id="B2"
                name="languageLevel"
                value="B2"
                onChange={(e) => setLevel(e.target.value)}
              />
              <label htmlFor="B2">B2</label>
            </div>

            <div>
              <input
                type="radio"
                id="C1"
                name="languageLevel"
                value="C1"
                onChange={(e) => setLevel(e.target.value)}
              />
              <label htmlFor="C1">C1</label>
            </div>

            <div>
              <input
                type="radio"
                id="C2"
                name="languageLevel"
                value="C2"
                onChange={(e) => setLevel(e.target.value)}
              />
              <label htmlFor="C2">C2</label>
            </div>

            <div>
              <input
                type="radio"
                id="native"
                name="languageLevel"
                value="Native"
                onChange={(e) => setLevel(e.target.value)}
              />
              <label htmlFor="native">Native</label>
            </div>
          </fieldset>

          <button onClick={addNewItem}>Submit</button>
          <button onClick={handleCancelSubmit}>Cancel</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </fieldset>
      </form>
    </>
  );
}

export default NewLanguage;
