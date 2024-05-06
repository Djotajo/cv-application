import { useState } from "react";
import EducationPieceEdit from "./educationPiece";
import EducationPieceCompleted from "./educationPieceCompleted";

function EducationInfo() {
  const [educationArray, setEducationArray] = useState([]);
  const [addNew, setAddNew] = useState(false);

  function editArray(newObject) {
    setEducationArray((prevEducationArray) => [
      ...prevEducationArray,
      newObject,
    ]);
  }

  function addItem() {
    setAddNew(!addNew);
    console.log(addNew);
  }

  function removeItem(itemId) {
    setEducationArray(educationArray.filter((item) => item.id !== itemId));
  }

  function editItem(itemId) {
    setEducationArray(educationArray.filter((item) => item.id !== itemId));
  }

  const list = educationArray.map((piece) => (
    <EducationPieceCompleted
      name={piece.schoolName}
      title={piece.title}
      startDate={piece.start}
      endDate={piece.end}
      key={piece.id}
      id={piece.id}
      handleRemoveItem={removeItem}
    />
  ));
  return (
    <>
      <h2>Education</h2>
      <button onClick={addItem}>Add new info</button>
      {addNew ? (
        <EducationPieceEdit
          educationArray={educationArray}
          handler={editArray}
        />
      ) : (
        <span></span>
      )}
      {/* <EducationPieceEdit educationArray={educationArray} handler={editArray} /> */}
      {list}
    </>
  );
}

export default EducationInfo;
