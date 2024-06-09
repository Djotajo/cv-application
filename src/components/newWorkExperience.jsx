import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewWorkExperience({ workArray, handleAdd, handleCancel }) {
  const workId = uuidv4();
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");

  function handleCancelSubmit(event) {
    event.preventDefault();
    handleCancel();
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleAdd({
      id: workId,
      companyName: companyName,
      jobPosition: jobPosition,
      responsibilities: responsibilities,
      jobStartDate: jobStartDate,
      jobEndDate: jobEndDate,
    });
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
              onChange={(e) => setCompanyName(e.target.value)}
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="jobPosition">Position </label>
            <input
              type="text"
              id="jobPosition"
              name="jobPosition"
              onChange={(e) => setJobPosition(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="responsibilities">Main Responsibilities </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              rows="6"
              cols="30"
              onChange={(e) => setResponsibilities(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="jobStartDate">Start of Work </label>
            <input
              type="month"
              id="jobStartDate"
              name="jobStartDate"
              onChange={(e) => setJobStartDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="jobEndDate">End of Work </label>
            <input
              type="month"
              id="jobEndDate"
              name="jobEndDate"
              onChange={(e) => setJobEndDate(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancelSubmit}>Cancel</button>
        </fieldset>
      </form>
    </>
  );
}

export default NewWorkExperience;
