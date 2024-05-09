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
      <p>Company Name - {company}</p>
      <p>Position - {position}</p>
      <p>Main responsibilities - {responsibilities}</p>
      <p>Start of Work - {startDate}</p>
      <p>End of Work - {endDate}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>Remove</button>
    </>
  );
}

export default WorkExperienceCompleted;
