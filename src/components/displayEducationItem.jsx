function DisplayEducationItem({ name, title, startDate, endDate, id }) {
  const dateOptions = { month: "long", year: "numeric" };

  const [startYear, startMonth] = startDate.split("-");
  const dateStart = new Date(startYear, startMonth - 1);
  const formattedDateStart = dateStart.toLocaleDateString("en-GB", dateOptions);

  let formattedDateEnd;
  if (endDate === "ongoing") {
    formattedDateEnd = "ongoing";
  } else {
    const [year, month] = endDate.split("-");
    const dateEnd = new Date(year, month - 1);
    formattedDateEnd = dateEnd.toLocaleDateString("en-GB", dateOptions);
  }

  return (
    <>
      <li className="itemDisplay">
        <p>
          {formattedDateStart} - {formattedDateEnd}
        </p>
        <h3>{title}</h3>
        <p>{name}</p>
      </li>
    </>
  );
}

export default DisplayEducationItem;
