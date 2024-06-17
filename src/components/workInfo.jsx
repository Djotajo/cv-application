import { useState } from "react";
import NewWorkExperience from "./newWorkExperience";
import WorkExperienceCompleted from "./workExperienceCompleted";
import WorkExperienceEdit from "./workExperienceEdit";

function WorkInfo({
  workArray,
  setWorkArray,
  handleArrayChange,
  handleMoveItemUp,
  handleMoveItemDown,
  handleRemoveItem,
  handleEditItem,
  handleSubmitEditWorkItem,
}) {
  const [addNew, setAddNew] = useState(false);

  function addItem() {
    setAddNew(!addNew);
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
          key={piece.id}
          id={piece.id}
          workArray={workArray}
          setWorkArray={setWorkArray}
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
          <h2>Work Experience</h2>
        </legend>

        <button onClick={addItem}>Add new</button>
        {addNew ? (
          <NewWorkExperience
            workArray={workArray}
            setWorkArray={setWorkArray}
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

export default WorkInfo;
