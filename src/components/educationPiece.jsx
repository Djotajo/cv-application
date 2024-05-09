import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function EducationPiece({ educationArray, handleAdd, handleCancel }) {
  const pieceId = uuidv4();
  const [name, setSchoolName] = useState("");
  const [titleEarned, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleCancelSubmit(event) {
    event.preventDefault();
    handleCancel();
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleAdd({
      id: pieceId,
      schoolName: name,
      title: titleEarned,
      start: startDate,
      end: endDate,
    });
  }

  return (
    <>
      <form action="#">
        <label htmlFor="schoolName">
          School Name{" "}
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <label htmlFor="studyTitle">
          Title Earned{" "}
          <input
            type="text"
            id="studyTitle"
            name="studyTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="studyDateStart">
          Start of Studies{" "}
          <input
            type="date"
            id="studyDateStart"
            name="studyDateStart"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label htmlFor="studyDateEnd">
          End of Studies{" "}
          <input
            type="date"
            id="studyDateEnd"
            name="studyDateEnd"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancelSubmit}>Cancel</button>
      </form>
    </>
  );
}

export default EducationPiece;
