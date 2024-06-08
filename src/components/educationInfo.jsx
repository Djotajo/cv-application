import { useState } from "react";
import NewEducationPiece from "./newEducationPiece";
import EducationPieceCompleted from "./educationPieceCompleted";
import EducationPieceEdit from "./educationPieceEdit";

function EducationInfo({
  educationArray,
  handleEducationArrayChange,
  handleRemoveEducationItem,
  handleEditEducationItem,
  handleSubmitEditEducationItem,
}) {
  // const [educationArray, setEducationArray] = useState([]);
  const [addNew, setAddNew] = useState(false);

  function editArray(newObject) {
    handleEducationArrayChange(newObject);
    addItem();
    console.log(educationArray);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function addItem() {
    setAddNew(!addNew);
    console.log(addNew);
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
          startDate={piece.start}
          endDate={piece.end}
          key={piece.id}
          id={piece.id}
          handleEditItem={handleEditEducationItem}
          handleRemoveItem={handleRemoveEducationItem}
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
        {/* <h2>Education</h2> */}
        <button onClick={addItem}>Add new</button>
        {addNew ? (
          <NewEducationPiece
            educationArray={educationArray}
            handleAdd={editArray}
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

// import { useState } from "react";
// import NewEducationPiece from "./newEducationPiece";
// import EducationPieceCompleted from "./educationPieceCompleted";
// import EducationPieceEdit from "./educationPieceEdit";

// function EducationInfo() {
//   const [educationArray, setEducationArray] = useState([]);
//   const [addNew, setAddNew] = useState(false);

//   function editArray(newObject) {
//     setEducationArray((prevEducationArray) => [
//       ...prevEducationArray,
//       newObject,
//     ]);
//     addItem();
//     console.log(educationArray);
//   }

//   function addItem() {
//     setAddNew(!addNew);
//     console.log(addNew);
//   }

//   function removeItem(itemId) {
//     setEducationArray(educationArray.filter((item) => item.id !== itemId));
//   }

//   function editItem(itemId) {
//     setEducationArray((prevEducationArray) =>
//       prevEducationArray.map((item) =>
//         item.id === itemId ? { ...item, edit: true } : item
//       )
//     );
//   }

//   function submitEditItem(itemId, updatedItem) {
//     setEducationArray((prevEducationArray) =>
//       prevEducationArray.map((item) =>
//         item.id === itemId ? { ...item, ...updatedItem } : item
//       )
//     );
//     console.dir(educationArray);
//   }

//   const list = educationArray.map((piece) =>
//     piece.edit === true ? (
//       <EducationPieceEdit
//         name={piece.schoolName}
//         title={piece.title}
//         startDate={piece.start}
//         endDate={piece.end}
//         id={piece.id}
//         handleEditItem={submitEditItem}
//         key={piece.id}
//       />
//     ) : (
//       <EducationPieceCompleted
//         name={piece.schoolName}
//         title={piece.title}
//         startDate={piece.start}
//         endDate={piece.end}
//         key={piece.id}
//         id={piece.id}
//         handleEditItem={editItem}
//         handleRemoveItem={removeItem}
//       />
//     )
//   );
//   return (
//     <>
//       <h2>Education</h2>
//       <button onClick={addItem}>Add new</button>
//       {addNew ? (
//         <NewEducationPiece
//           educationArray={educationArray}
//           handleAdd={editArray}
//           handleCancel={addItem}
//         />
//       ) : (
//         <span></span>
//       )}
//       {list}
//     </>
//   );
// }

// export default EducationInfo;
