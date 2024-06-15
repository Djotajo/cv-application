import { useState } from "react";

function SkillCompleted({ skill, id, handleEditItem, handleRemoveItem }) {
  const [edit, setEdit] = useState(false);

  function handleRemove(event) {
    event.preventDefault();

    handleRemoveItem(id);
  }

  function handleEdit() {
    setEdit(true);
    console.log(edit);
    handleEditItem(id);
  }

  return (
    <>
      <div className="eduItem">
        <p className="itemParagraph">{skill}</p>
        <div className="eduItemButtons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default SkillCompleted;
