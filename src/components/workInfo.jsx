import { useState } from "react";
import NewWorkExperience from "./newWorkExperience";
import WorkExperienceCompleted from "./workExperienceCompleted";
import WorkExperienceEdit from "./workExperienceEdit";

function WorkInfo({
  workArray,
  setWorkArray,
  handleWorkArrayChange,
  handleMoveItemUp,
  handleMoveItemDown,
  handleRemoveWorkItem,
  handleEditWorkItem,
  handleSubmitEditWorkItem,
}) {
  // const [workArray, setWorkArray] = useState([]);
  const [addNew, setAddNew] = useState(false);

  function editArray(newObject) {
    handleWorkArrayChange(newObject);
    addItem();
    console.log(workArray);
  }

  function addItem() {
    setAddNew(!addNew);
    console.log(addNew);
  }

  let list = [];

  if (workArray) {
    list = workArray.map((piece) =>
      piece.edit === true ? (
        <WorkExperienceEdit
          company={piece.companyName}
          city={piece.city}
          country={piece.country}
          position={piece.jobPosition}
          responsibilities={piece.responsibilities}
          startDate={piece.jobStartDate}
          endDate={piece.jobEndDate}
          key={piece.id}
          id={piece.id}
          handleEditItem={handleSubmitEditWorkItem}
        />
      ) : (
        <WorkExperienceCompleted
          company={piece.companyName}
          position={piece.jobPosition}
          responsibilities={piece.responsibilities}
          startDate={piece.jobStartDate}
          endDate={piece.jobEndDate}
          key={piece.id}
          id={piece.id}
          workArray={workArray}
          setWorkArray={setWorkArray}
          handleMoveItemUp={handleMoveItemUp}
          handleMoveItemDown={handleMoveItemDown}
          handleEditItem={handleEditWorkItem}
          handleRemoveItem={handleRemoveWorkItem}
        />
      )
    );
  }

  return (
    <>
      <fieldset>
        <legend>
          <h2>Work Experience</h2>
        </legend>

        <button onClick={addItem}>Add new</button>
        {addNew ? (
          <NewWorkExperience
            workArray={workArray}
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

export default WorkInfo;

// import { useState } from "react";
// import NewWorkExperience from "./newWorkExperience";
// import WorkExperienceCompleted from "./workExperienceCompleted";
// import WorkExperienceEdit from "./workExperienceEdit";

// function WorkInfo() {
//   const [workArray, setWorkArray] = useState([]);
//   const [addNew, setAddNew] = useState(false);

//   function addNewWorkExperience(newObject) {
//     setWorkArray((prevWorkArray) => [...prevWorkArray, newObject]);
//     addItem();
//     console.log(workArray);
//   }

//   function addItem() {
//     setAddNew(!addNew);
//     console.log(addNew);
//   }

//   function removeItem(itemId) {
//     setWorkArray(workArray.filter((item) => item.id !== itemId));
//   }

//   function editItem(itemId) {
//     setWorkArray((prevWorkArray) =>
//       prevWorkArray.map((item) =>
//         item.id === itemId ? { ...item, edit: true } : item
//       )
//     );
//   }

//   function submitEditItem(itemId, updatedItem) {
//     setWorkArray((prevWorkArray) =>
//       prevWorkArray.map((item) =>
//         item.id === itemId ? { ...item, ...updatedItem } : item
//       )
//     );
//     console.dir(workArray);
//   }

//   const list = workArray.map((piece) =>
//     piece.edit === true ? (
//       <WorkExperienceEdit
//         company={piece.companyName}
//         position={piece.jobPosition}
//         responsibilities={piece.responsibilities}
//         startDate={piece.jobStartDate}
//         endDate={piece.jobEndDate}
//         key={piece.id}
//         id={piece.id}
//         handleEditItem={submitEditItem}
//       />
//     ) : (
//       <WorkExperienceCompleted
//         company={piece.companyName}
//         position={piece.jobPosition}
//         responsibilities={piece.responsibilities}
//         startDate={piece.jobStartDate}
//         endDate={piece.jobEndDate}
//         key={piece.id}
//         id={piece.id}
//         handleEditItem={editItem}
//         handleRemoveItem={removeItem}
//       />
//     )
//   );
//   return (
//     <>
//       <h2>Work Experience</h2>
//       <button onClick={addItem}>Add new</button>
//       {addNew ? (
//         <NewWorkExperience
//           workArray={workArray}
//           handleAdd={addNewWorkExperience}
//           handleCancel={addItem}
//         />
//       ) : (
//         <span></span>
//       )}
//       {list}
//     </>
//   );
// }

// export default WorkInfo;
