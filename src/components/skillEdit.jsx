import { useState } from "react";

function SkillEdit({ skill, id, handleEditItem }) {
  const [skillName, setSkill] = useState(skill);
  const [errorMessage, setErrorMessage] = useState("");

  function handleEdit(event) {
    event.preventDefault();

    if (skillName.trim() !== "") {
      setErrorMessage("");
      const updatedItem = {
        id: id,
        skill: skillName,
        edit: false,
      };
      handleEditItem(id, updatedItem);
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
              value={skillName}
              onChange={(e) => setSkill(e.target.value)}
              required
            />
          </div>

          <button onClick={handleEdit}>Submit</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </fieldset>
      </form>
    </>
  );
}

export default SkillEdit;
