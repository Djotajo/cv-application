import { useState } from "react";

function EducationPieceCompleted({
  name,
  title,
  startDate,
  endDate,
  id,
  educationArray,
  setEducationArray,
  handleMoveItemUp,
  handleMoveItemDown,
  handleEditItem,
  handleRemoveItem,
}) {
  const [edit, setEdit] = useState(false);

  function moveUp(event, id) {
    event.preventDefault();

    handleMoveItemUp(educationArray, setEducationArray, id);
  }

  function moveDown(event, id) {
    event.preventDefault();

    handleMoveItemDown(educationArray, setEducationArray, id);
  }

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
        <p>
          {name} - {title}
        </p>
        <button
          className="moveItemButton"
          onClick={(event) => moveUp(event, id)}
        >
          Go up
        </button>
        <button
          className="moveItemButton"
          onClick={(event) => moveDown(event, id)}
        >
          Go down
        </button>
        <div className="eduItemButtons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default EducationPieceCompleted;
