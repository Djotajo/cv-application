import { useState } from "react";
import NewEducationPiece from "./newEducationPiece";
import EducationPieceCompleted from "./educationPieceCompleted";
import EducationPieceEdit from "./educationPieceEdit";

function EducationInfo({
  educationArray,
  setEducationArray,
  handleArrayChange,
  handleMoveItemUp,
  handleMoveItemDown,
  handleRemoveItem,
  handleEditItem,
  handleSubmitEditEducationItem,
}) {
  const [addNew, setAddNew] = useState(false);

  function addItem() {
    setAddNew(!addNew);
  }
  let list = [];

  if (educationArray) {
    list = educationArray.map((piece) =>
      piece.edit === true ? (
        <EducationPieceEdit
          name={piece.schoolName}
          title={piece.title}
          startDate={piece.start}
          endDate={piece.end}
          id={piece.id}
          handleEditItem={handleSubmitEditEducationItem}
          key={piece.id}
        />
      ) : (
        <EducationPieceCompleted
          name={piece.schoolName}
          title={piece.title}
          key={piece.id}
          id={piece.id}
          educationArray={educationArray}
          setEducationArray={setEducationArray}
          handleMoveItemUp={handleMoveItemUp}
          handleMoveItemDown={handleMoveItemDown}
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
          <h2>Education</h2>
        </legend>
        <button onClick={addItem}>Add new</button>
        {addNew ? (
          <NewEducationPiece
            educationArray={educationArray}
            setEducationArray={setEducationArray}
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

export default EducationInfo;
