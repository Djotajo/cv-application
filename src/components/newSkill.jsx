import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewSkill({ skillArray, handleAdd, handleCancel }) {
  const skillId = uuidv4();
  const [skill, setSkill] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleCancelSubmit(event) {
    event.preventDefault();
    handleCancel();
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (skill.trim() !== "") {
      setErrorMessage("");
      handleAdd({
        id: skillId,
        skill: skill,
      });
    } else {
      setErrorMessage("Please fill in all required fields.");
    }
  }

  return (
    <>
      <form action="#">
        <fieldset>
          <div>
            <label htmlFor="skill">
              Skill <span className="required-note">*</span>{" "}
            </label>
            <input
              type="text"
              id="skill"
              name="skill"
              onChange={(e) => setSkill(e.target.value)}
              required
              autoFocus
              aria-required="true"
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button onClick={handleCancelSubmit}>Cancel</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </fieldset>
      </form>
    </>
  );
}

export default NewSkill;
