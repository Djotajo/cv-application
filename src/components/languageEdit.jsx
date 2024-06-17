import { useState } from "react";

function LanguageEdit({
  language,
  level,
  id,
  languageArray,
  setLanguageArray,
  handleSubmitEditedItem,
}) {
  const [languageName, setLanguage] = useState(language);
  const [languageLevel, setLevel] = useState(level);
  const [errorMessage, setErrorMessage] = useState("");

  function handleEdit(event) {
    event.preventDefault();

    if (languageName.trim() !== "") {
      const editedItem = {
        id: id,
        language: languageName,
        level: languageLevel,
        edit: false,
      };
      handleSubmitEditedItem(languageArray, setLanguageArray, id, editedItem);
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
              Language <span className="required-note">*</span>
            </label>
            <input
              type="text"
              id="language"
              name="language"
              value={languageName}
              onChange={(e) => setLanguage(e.target.value)}
              required
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
                defaultChecked={languageLevel === "A1"}
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
                defaultChecked={languageLevel === "A2"}
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
                defaultChecked={languageLevel === "B1"}
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
                defaultChecked={languageLevel === "B2"}
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
                defaultChecked={languageLevel === "C1"}
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
                defaultChecked={languageLevel === "C2"}
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
                defaultChecked={languageLevel === "Native"}
              />
              <label htmlFor="native">Native</label>
            </div>
          </fieldset>

          <button onClick={handleEdit}>Submit</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </fieldset>
      </form>
    </>
  );
}

export default LanguageEdit;
