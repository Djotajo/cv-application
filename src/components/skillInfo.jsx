import { useState } from "react";
import NewSkill from "./newSkill";
import SkillCompleted from "./skillCompleted";
import SkillEdit from "./skillEdit";

function SkillInfo({
  skillArray,
  setSkillArray,
  handleArrayChange,
  handleRemoveSkill,
  handleEditSkill,
  handleSubmitSkill,
}) {
  const [addNew, setAddNew] = useState(false);

  function addItem() {
    setAddNew(!addNew);
    console.log(addNew);
  }
  let list = [];

  if (skillArray) {
    list = skillArray.map((piece) =>
      piece.edit === true ? (
        <SkillEdit
          skill={piece.skill}
          id={piece.id}
          handleEditItem={handleSubmitSkill}
          key={piece.id}
        />
      ) : (
        <SkillCompleted
          skill={piece.skill}
          key={piece.id}
          id={piece.id}
          handleEditItem={handleEditSkill}
          handleRemoveItem={handleRemoveSkill}
        />
      )
    );
  }

  return (
    <>
      <fieldset>
        <legend>
          <h2>Skills</h2>
        </legend>

        <button onClick={addItem}>Add new</button>
        {addNew ? (
          <NewSkill
            skillArray={skillArray}
            setSkillArray={setSkillArray}
            handleArrayChange={handleArrayChange}
            addNew={addNew}
            setAddNew={setAddNew}
            handleCancel={addItem}
          />
        ) : (
          <span></span>
        )}
        {list}
      </fieldset>
    </>
  );
}

export default SkillInfo;
