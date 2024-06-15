import { useState } from "react";

function WorkExperienceCompleted({
  company,
  position,
  responsibilities,
  startDate,
  endDate,
  id,
  workArray,
  setWorkArray,
  handleMoveItemUp,
  handleMoveItemDown,
  handleEditItem,
  handleRemoveItem,
}) {
  const [edit, setEdit] = useState(false);

  function moveUp(event) {
    event.preventDefault();

    handleMoveItemUp(id);
  }

  function moveDown(event, id) {
    event.preventDefault();

    handleMoveItemDown(workArray, setWorkArray, id);
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
      <div className="workItem">
        <p>
          {company} - {position}
        </p>
        <button className="moveUpButton" onClick={moveUp}>
          Go up
        </button>
        <button
          className="moveUpButton"
          onClick={(event) => moveDown(event, id)}
        >
          Go down
        </button>
        <div className="workItemButtons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default WorkExperienceCompleted;
