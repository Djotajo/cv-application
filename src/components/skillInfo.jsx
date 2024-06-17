import { useState } from "react";
import NewSkill from "./newSkill";
import SkillCompleted from "./skillCompleted";
import SkillEdit from "./skillEdit";

function SkillInfo({
  skillArray,
  setSkillArray,
  handleArrayChange,
  handleRemoveItem,
  handleEditItem,
  handleSubmitEditedItem,
}) {
  const [addNew, setAddNew] = useState(false);

  function addItem() {
    setAddNew(!addNew);
  }
  let list = [];

  if (skillArray) {
    list = skillArray.map((piece) =>
      piece.edit === true ? (
        <SkillEdit
          skill={piece.skill}
          id={piece.id}
          skillArray={skillArray}
          setSkillArray={setSkillArray}
          handleSubmitEditedItem={handleSubmitEditedItem}
          key={piece.id}
        />
      ) : (
        <SkillCompleted
          skill={piece.skill}
          key={piece.id}
          id={piece.id}
          skillArray={skillArray}
          setSkillArray={setSkillArray}
          handleEditItem={handleEditItem}
          handleRemoveItem={handleRemoveItem}
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
