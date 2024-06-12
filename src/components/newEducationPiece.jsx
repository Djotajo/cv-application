import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewEducationPiece({ educationArray, handleAdd, handleCancel }) {
  const pieceId = uuidv4();
  const [name, setSchoolName] = useState("");
  const [titleEarned, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ongoing, setOngoing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleCancelSubmit(event) {
    event.preventDefault();
    handleCancel();
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      name.trim() !== "" &&
      titleEarned.trim() !== "" &&
      startDate.trim() !== "" &&
      endDate.trim() !== ""
    ) {
      setErrorMessage("");

      handleAdd({
        id: pieceId,
        schoolName: name,
        title: titleEarned,
        start: startDate,
        end: endDate,
      });
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
            <label htmlFor="schoolName">School Name </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              onChange={(e) => setSchoolName(e.target.value)}
              autoFocus
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="studyTitle">Title Earned </label>
            <input
              type="text"
              id="studyTitle"
              name="studyTitle"
              onChange={(e) => setTitle(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="studyDateStart">Start of Studies </label>
            <input
              type="month"
              id="studyDateStart"
              name="studyDateStart"
              onChange={(e) => setStartDate(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="studyDateEnd">End of Studies </label>
            <input
              type="month"
              id="studyDateEnd"
              name="studyDateEnd"
              onChange={(e) => setEndDate(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancelSubmit}>Cancel</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </fieldset>
      </form>
    </>
  );
}

export default NewEducationPiece;
