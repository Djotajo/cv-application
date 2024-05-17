import { useState } from "react";

function EducationPieceCompleted({
  name,
  title,
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
      <div className="eduItem">
        <p>
          {name} - {title}
        </p>
        <div className="eduItemButtons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
      {/* <p>
        {name} - {title}
      </p>
      <p>Title Earned - {title}</p>
      <p>Start of Studies - {startDate}</p>
      <p>End of Studies - {endDate}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>Remove</button> */}
    </>
  );
}

export default EducationPieceCompleted;
