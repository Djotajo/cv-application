import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewSkill({ skillArray, handleAdd, handleCancel }) {
  const skillId = uuidv4();
  const [skill, setSkill] = useState("");

  function handleCancelSubmit(event) {
    event.preventDefault();
    handleCancel();
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleAdd({
      id: skillId,
      skill: skill,
    });
  }

  return (
    <>
      <form action="#">
        <fieldset>
          <div>
            <label htmlFor="skill">Skill </label>
            <input
              type="text"
              id="skill"
              name="skill"
              onChange={(e) => setSkill(e.target.value)}
              required
            />
          </div>

          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancelSubmit}>Cancel</button>
        </fieldset>
      </form>
    </>
  );
}

export default NewSkill;
