import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowDownBold } from "@mdi/js";
import { mdiArrowUpBold } from "@mdi/js";

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
        <div className="itemContent">
          <p>
            {name} - {title}
          </p>
          <div className="itemContentButtons">
            <Icon
              path={mdiArrowUpBold}
              size={1}
              onClick={(event) => moveUp(event, id)}
              className="moveItemIcon"
            />
            <Icon
              path={mdiArrowDownBold}
              size={1}
              onClick={(event) => moveDown(event, id)}
              className="moveItemIcon"
            />
          </div>
        </div>

        <div className="eduItemButtons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default EducationPieceCompleted;
