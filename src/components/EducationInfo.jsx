import { useState } from "react";
import EducationPiece from "./educationPiece";
import EducationPieceCompleted from "./educationPieceCompleted";
import EducationPieceEdit from "./EducationPieceEdit";

function EducationInfo() {
  const [educationArray, setEducationArray] = useState([]);
  const [addNew, setAddNew] = useState(false);

  function editArray(newObject) {
    setEducationArray((prevEducationArray) => [
      ...prevEducationArray,
      newObject,
    ]);
    addItem();
    console.log(educationArray);
  }

  function addItem() {
    setAddNew(!addNew);
    console.log(addNew);
  }

  function removeItem(itemId) {
    setEducationArray(educationArray.filter((item) => item.id !== itemId));
  }

  function editItem(itemId) {
    setEducationArray((prevEducationArray) =>
      prevEducationArray.map((item) =>
        item.id === itemId ? { ...item, edit: true } : item
      )
    );
  }

  function submitEditItem(itemId, updatedItem) {
    setEducationArray((prevEducationArray) =>
      prevEducationArray.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    );
    console.dir(educationArray);
  }

  const list = educationArray.map((piece) =>
    piece.edit === true ? (
      <EducationPieceEdit
        name={piece.schoolName}
        title={piece.title}
        startDate={piece.start}
        endDate={piece.end}
        id={piece.id}
        handleEditItem={submitEditItem}
        key={piece.id}
      />
    ) : (
      <EducationPieceCompleted
        name={piece.schoolName}
        title={piece.title}
        startDate={piece.start}
        endDate={piece.end}
        key={piece.id}
        id={piece.id}
        handleEditItem={editItem}
        handleRemoveItem={removeItem}
      />
    )
  );
  return (
    <>
      <h2>Education</h2>
      <button onClick={addItem}>Add new info</button>
      {addNew ? (
        <EducationPiece
          educationArray={educationArray}
          handleAdd={editArray}
          handleCancel={addItem}
        />
      ) : (
        <span></span>
      )}
      {list}
    </>
  );
}

export default EducationInfo;
