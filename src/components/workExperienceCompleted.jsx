import { useState } from "react";

function WorkExperienceCompleted({
  company,
  position,
  responsibilities,
  startDate,
  endDate,
  id,
  handleEditItem,
  handleRemoveItem,
}) {
  const [edit, setEdit] = useState(false);

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
        <div className="workItemButtons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default WorkExperienceCompleted;
