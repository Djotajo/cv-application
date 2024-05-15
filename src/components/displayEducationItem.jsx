import { useState } from "react";

function DisplayEducationItem({
  name,
  title,
  startDate,
  endDate,
  id,
  // handleEditItem,
  // handleRemoveItem,
}) {
  // const [edit, setEdit] = useState(false);

  // function handleRemove(event) {
  //   event.preventDefault();

  //   handleRemoveItem(id);
  // }

  // function handleEdit() {
  //   setEdit(true);
  //   console.log(edit);
  //   handleEditItem(id);
  // }
  const dateOptions = { month: "long", year: "numeric" };

  const [startYear, startMonth] = startDate.split("-");
  const dateStart = new Date(startYear, startMonth - 1);
  const formattedDateStart = dateStart.toLocaleDateString("en-GB", dateOptions);

  const [year, month] = endDate.split("-");
  const dateEnd = new Date(year, month - 1);
  const formattedDateEnd = dateEnd.toLocaleDateString("en-GB", dateOptions);

  return (
    <>
      <h3>{name}</h3>
      <p>{title}</p>
      <p>
        {formattedDateStart} - {formattedDateEnd}
      </p>
      {/* <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>Remove</button> */}
    </>
  );
}

export default DisplayEducationItem;
