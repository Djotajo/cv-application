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
        <label htmlFor="companyName">
          Company Name{" "}
          <input
            type="text"
            id="companyName"
            name="companyName"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label htmlFor="jobPosition">
          Title Earned{" "}
          <input
            type="text"
            id="jobPosition"
            name="jobPosition"
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
            onChange={(e) => setResponsibilities(e.target.value)}
          />
        </label>
        <label htmlFor="jobStartDate">
          Start of Work{" "}
          <input
            type="date"
            id="jobStartDate"
            name="jobStartDate"
            onChange={(e) => setJobStartDate(e.target.value)}
          />
        </label>
        <label htmlFor="jobEndDate">
          End of Work{" "}
          <input
            type="date"
            id="jobEndDate"
            name="jobEndDate"
            onChange={(e) => setJobEndDate(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancelSubmit}>Cancel</button>
      </form>
    </>
  );
}

export default NewWorkExperience;
