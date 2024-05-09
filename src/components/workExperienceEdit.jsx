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
        <fieldset>
          <div>
            <label htmlFor="companyName">Company Name </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="jobPosition">Position </label>
            <input
              type="text"
              id="jobPosition"
              name="jobPosition"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="responsibilities">Main Responsibilities </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              rows="4"
              cols="50"
              value={mainResponsibilities}
              onChange={(e) => setMainResponsibilities(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="jobStartDate">Start of Work </label>
            <input
              type="date"
              id="jobStartDate"
              name="jobStartDate"
              value={jobStartDate}
              onChange={(e) => setJobStartDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="jobEndDate">End of Work </label>
            <input
              type="date"
              id="jobEndDate"
              name="jobEndDate"
              value={jobEndDate}
              onChange={(e) => setJobEndDate(e.target.value)}
            />
          </div>

          <button onClick={handleEdit}>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default WorkExperienceEdit;
