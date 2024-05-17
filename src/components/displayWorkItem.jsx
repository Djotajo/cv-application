import { useState } from "react";

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
  const formattedDateEnd = dateEnd.toLocaleDateString("en-GB", dateOptions);

  return (
    <>
      <h3>{company}</h3>
      <p>{position}</p>
      <p>{responsibilities}</p>
      <p>
        {formattedDateStart} - {formattedDateEnd}
      </p>
    </>
  );
}

export default DisplayWorkItem;
