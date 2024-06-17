import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowDownBold } from "@mdi/js";
import { mdiArrowUpBold } from "@mdi/js";

function WorkExperienceCompleted({
  company,
  position,
  id,
  workArray,
  setWorkArray,
  handleMoveItemUp,
  handleMoveItemDown,
  handleEditItem,
  handleRemoveItem,
}) {
  const [edit, setEdit] = useState(false);

  function moveUp(event, id) {
    event.preventDefault();

    handleMoveItemUp(workArray, setWorkArray, id);
  }

  function moveDown(event, id) {
    event.preventDefault();

    handleMoveItemDown(workArray, setWorkArray, id);
  }

  function handleRemove(event) {
    event.preventDefault();

    handleRemoveItem(workArray, setWorkArray, id);
  }

  function handleEdit() {
    setEdit(true);
    handleEditItem(workArray, setWorkArray, id);
  }

  return (
    <>
      <div className="workItem">
        <div className="itemContent">
          <p>
            {company} - {position}{" "}
          </p>
          <div className="itemContentButtons">
            <Icon
              path={mdiArrowUpBold}
              size={1}
              onClick={(event) => moveUp(event, id)}
              className="moveItemIcon"
              aria-label="move item up"
            />
            <Icon
              path={mdiArrowDownBold}
              size={1}
              onClick={(event) => moveDown(event, id)}
              className="moveItemIcon"
              aria-label="move item down"
            />
          </div>
        </div>

        <div className="workItemButtons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default WorkExperienceCompleted;
