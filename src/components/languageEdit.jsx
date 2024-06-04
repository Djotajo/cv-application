import { useState } from "react";

function LanguageEdit({ language, level, id, handleEditItem }) {
  const [languageName, setLanguage] = useState(language);
  const [languageLevel, setLevel] = useState(level);

  function handleEdit(event) {
    event.preventDefault();
    const updatedItem = {
      id: id,
      language: languageName,
      level: languageLevel,
      edit: false,
    };
    handleEditItem(id, updatedItem);
  }

  return (
    <>
      <form action="#">
        <fieldset>
          <div>
            <label htmlFor="language">Language </label>
            <input
              type="text"
              id="language"
              name="language"
              value={languageName}
              onChange={(e) => setLanguage(e.target.value)}
              required
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
                value="Native language"
                onChange={(e) => setLevel(e.target.value)}
              />
              <label htmlFor="native">Native language</label>
            </div>
          </fieldset>

          <button onClick={handleEdit}>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default LanguageEdit;
