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
  const [errorMessage, setErrorMessage] = useState("");

  function handleEdit(event) {
    event.preventDefault();

    if (
      companyName.trim() !== "" &&
      jobPosition.trim() !== "" &&
      mainResponsibilities.trim() !== "" &&
      jobStartDate.trim() !== "" &&
      jobEndDate.trim() !== ""
    ) {
      setErrorMessage("");
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
    } else {
      setErrorMessage("Please fill in all required fields.");
    }
  }

  return (
    <>
      <form action="#">
        <fieldset>
          <span className="required-note">All fields are required</span>
          <div>
            <label htmlFor="companyName">Company Name </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              aria-required="true"
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
              required
              aria-required="true"
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
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="jobStartDate">Start of Work </label>
            <input
              type="month"
              id="jobStartDate"
              name="jobStartDate"
              value={jobStartDate}
              onChange={(e) => setJobStartDate(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="jobEndDate">End of Work </label>
            <input
              type="month"
              id="jobEndDate"
              name="jobEndDate"
              value={jobEndDate}
              onChange={(e) => setJobEndDate(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <button onClick={handleEdit}>Submit</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </fieldset>
      </form>
    </>
  );
}

export default WorkExperienceEdit;
