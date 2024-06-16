import { v4 as uuidv4 } from "uuid";
import ResponsibilityItem from "./responsiblityItem";

function DisplayWorkItem({
  company,
  city,
  country,
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

  let formattedDateEnd;
  if (endDate === "ongoing") {
    formattedDateEnd = "ongoing";
  } else {
    const [year, month] = endDate.split("-");
    const dateEnd = new Date(year, month - 1);
    formattedDateEnd = dateEnd.toLocaleDateString("en-GB", dateOptions);
  }

  const responsibilitiesList = responsibilities.split("\n");

  const list = responsibilitiesList.map((item) => (
    <ResponsibilityItem item={item} key={uuidv4()} />
  ));

  return (
    <>
      <li className="itemDisplay">
        <p>
          {formattedDateStart} - {formattedDateEnd}
        </p>
        <p>
          {city}, {country}
        </p>
        <h3>{position}</h3>
        <p className="companyName">{company}</p>
        <ul>{list}</ul>
      </li>
    </>
  );
}

export default DisplayWorkItem;
