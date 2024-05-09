import { useState } from "react";

function WorkExperienceEdit({
  company,
  position,
  responsibilities,
  startDate,
  endDate,
  id,
  handleEditItem,
}) {
  const [companyName, setCompanyName] = useState(company);
  const [jobPosition, setJobPosition] = useState(position);
  const [mainResponsibilities, setMainResponsibilities] =
    useState(responsibilities);
  const [jobStartDate, setJobStartDate] = useState(startDate);
  const [jobEndDate, setJobEndDate] = useState(endDate);

  function handleEdit(event) {
    event.preventDefault();
    const updatedItem = {
      id: id,
      companyName: companyName,
      jobPosition: jobPosition,
      responsibilities: mainResponsibilities,
      jobStartDate: jobStartDate,
      jobEndDate: jobEndDate,
      edit: false,
    };
    handleEditItem(id, updatedItem);
    console.log(updatedItem);
  }

  return (
    <>
      <form action="#">
        <label htmlFor="companyName">
          Company Name{" "}
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label htmlFor="jobPosition">
          Position{" "}
          <input
            type="text"
            id="jobPosition"
            name="jobPosition"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
          />
        </label>
        <label htmlFor="responsibilities">
          Main Responsibilities{" "}
          <textarea
            id="responsibilities"
            name="responsibilities"
            rows="4"
            cols="50"
            value={mainResponsibilities}
            onChange={(e) => setMainResponsibilities(e.target.value)}
          />
        </label>
        <label htmlFor="jobStartDate">
          Start of Work{" "}
          <input
            type="date"
            id="jobStartDate"
            name="jobStartDate"
            value={jobStartDate}
            onChange={(e) => setJobStartDate(e.target.value)}
          />
        </label>
        <label htmlFor="jobEndDate">
          End of Work{" "}
          <input
            type="date"
            id="jobEndDate"
            name="jobEndDate"
            value={jobEndDate}
            onChange={(e) => setJobEndDate(e.target.value)}
          />
        </label>
        <button onClick={handleEdit}>Submit</button>
      </form>
    </>
  );
}

export default WorkExperienceEdit;
