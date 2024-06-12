import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ResponsibilityItem from "./responsiblityItem";

function DisplayWorkItem({
  company,
  position,
  responsibilities,
  startDate,
  endDate,
  id,
}) {
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

  const responsibilitiesList = responsibilities.split("\n");
  console.log(responsibilitiesList);

  const list = responsibilitiesList.map((item) => (
    <ResponsibilityItem item={item} key={uuidv4()} />
  ));

  return (
    <>
      <li className="itemDisplay">
        <p>
          {formattedDateStart} - {formattedDateEnd}
        </p>
        <h3>{position}</h3>
        <p className="companyName">{company}</p>
        <ul>{list}</ul>
      </li>
    </>
  );
}

export default DisplayWorkItem;
