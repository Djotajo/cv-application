import React from "react";
import { useState } from "react";

function EducationPieceEdit({ educationArray, handler }) {
  // potrebno ispraviti ovo oko id
  let eduId = educationArray.length + 1;
  const [name, setSchoolName] = useState("");
  const [titleEarned, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handler({
      id: eduId,
      schoolName: name,
      title: titleEarned,
      start: startDate,
      end: endDate,
    });

    setSchoolName("");
    setTitle("");
    setStartDate("");
    setEndDate("");
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
      </form>
    </>
  );
}

export default EducationPieceEdit;
