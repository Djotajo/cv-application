import { useState } from "react";

function EducationPieceEdit({
  name,
  title,
  startDate,
  endDate,
  id,
  handleEditItem,
}) {
  const [schoolName, setSchoolName] = useState(name);
  const [titleEarned, setTitle] = useState(title);
  const [start, setStartDate] = useState(startDate);
  const [end, setEndDate] = useState(endDate);
  const [ongoing, setOngoing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (e) => {
    setOngoing(e.target.checked);
    if (e.target.checked) {
      setEndDate("ongoing");
    } else {
      setEndDate(endDate);
    }
  };

  function handleEdit(event) {
    event.preventDefault();

    if (
      schoolName.trim() !== "" &&
      titleEarned.trim() !== "" &&
      start.trim() !== "" &&
      end.trim() !== ""
    ) {
      setErrorMessage("");

      const updatedItem = {
        id: id,
        schoolName: schoolName,
        title: titleEarned,
        start: start,
        end: end,
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
            <label htmlFor="schoolName">School Name </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
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
              value={titleEarned}
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
              value={start}
              onChange={(e) => setStartDate(e.target.value)}
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
            <label htmlFor="studyDateEnd">End of Studies </label>
            <input
              type="month"
              id="studyDateEnd"
              name="studyDateEnd"
              value={end === "ongoing" ? "" : end}
              onChange={(e) => setEndDate(e.target.value)}
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

export default EducationPieceEdit;
