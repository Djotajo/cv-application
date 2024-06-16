import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function NewWorkExperience({
  workArray,
  setWorkArray,
  handleArrayChange,
  addNew,
  setAddNew,
  handleCancel,
}) {
  const workId = uuidv4();
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [ongoing, setOngoing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (e) => {
    setOngoing(e.target.checked);
    if (e.target.checked) {
      setJobEndDate("ongoing");
    } else {
      setJobEndDate("");
    }
  };

  function handleCancelSubmit(event) {
    event.preventDefault();
    handleCancel();
  }

  function addNewItem(event) {
    event.preventDefault();

    if (
      companyName.trim() !== "" &&
      city.trim() !== "" &&
      country.trim() !== "" &&
      jobPosition.trim() !== "" &&
      responsibilities.trim() !== "" &&
      jobStartDate.trim() !== "" &&
      (jobEndDate.trim() !== "" || ongoing === true)
    ) {
      setErrorMessage("");

      const newItem = {
        id: workId,
        companyName: companyName,
        city: city,
        country: country,
        jobPosition: jobPosition,
        responsibilities: responsibilities,
        jobStartDate: jobStartDate,
        jobEndDate: jobEndDate,
      };
      handleArrayChange(workArray, setWorkArray, newItem);
      setAddNew(!addNew);
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
              onChange={(e) => setCompanyName(e.target.value)}
              autoFocus
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="city">City </label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={(e) => setCity(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="country">Country </label>
            <input
              type="text"
              id="country"
              name="country"
              onChange={(e) => setCountry(e.target.value)}
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
              rows="6"
              cols="30"
              onChange={(e) => setResponsibilities(e.target.value)}
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
              onChange={(e) => setJobStartDate(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="ongoingCheckbox">Ongoing:</label>
            <input
              type="checkbox"
              id="ongoingCheckbox"
              checked={ongoing}
              onChange={handleCheckboxChange}
            />
          </div>

          <div
            id="studyDateEndContainer"
            style={{ display: ongoing ? "none" : "flex" }}
          >
            <label htmlFor="jobEndDate">End of Work </label>
            <input
              type="month"
              id="jobEndDate"
              name="jobEndDate"
              onChange={(e) => setJobEndDate(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <button onClick={addNewItem}>Submit</button>
          <button onClick={handleCancelSubmit}>Cancel</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </fieldset>
      </form>
    </>
  );
}

export default NewWorkExperience;
