import { useState } from "react";

function SkillEdit({ skill, id, handleEditItem }) {
  const [skillName, setSkill] = useState(skill);

  function handleEdit(event) {
    event.preventDefault();
    const updatedItem = {
      id: id,
      language: skillName,
      edit: false,
    };
    handleEditItem(id, updatedItem);
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
              value={skillName}
              onChange={(e) => setSkill(e.target.value)}
              required
            />
          </div>

          <button onClick={handleEdit}>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default SkillEdit;
