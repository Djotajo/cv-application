import { useState } from "react";

function DisplayEducationItem({ name, title, startDate, endDate, id }) {
  const dateOptions = { month: "long", year: "numeric" };

  const [startYear, startMonth] = startDate.split("-");
  const dateStart = new Date(startYear, startMonth - 1);
  const formattedDateStart = dateStart.toLocaleDateString("en-GB", dateOptions);

  const [year, month] = endDate.split("-");
  const dateEnd = new Date(year, month - 1);

  let formattedDateEnd;
  endDate === "ongoing"
    ? (formattedDateEnd = "ongoing")
    : dateEnd.toLocaleDateString("en-GB", dateOptions);
  // const formattedDateEnd = dateEnd.toLocaleDateString("en-GB", dateOptions);

  return (
    <>
      <li className="itemDisplay">
        <p>
          {formattedDateStart} - {formattedDateEnd}
        </p>
        <h3>{title}</h3>
        <p>{name}</p>

        {/* <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>Remove</button> */}
      </li>
    </>
  );
}

export default DisplayEducationItem;
