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

  function handleEdit(event) {
    event.preventDefault();
    const updatedItem = {
      id: id,
      schoolName: schoolName,
      title: titleEarned,
      start: start,
      end: end,
      edit: false,
    };
    handleEditItem(id, updatedItem);
    console.log(updatedItem);
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
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <label htmlFor="studyTitle">
          Title Earned{" "}
          <input
            type="text"
            id="studyTitle"
            name="studyTitle"
            value={titleEarned}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="studyDateStart">
          Start of Studies{" "}
          <input
            type="date"
            id="studyDateStart"
            name="studyDateStart"
            value={start}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label htmlFor="studyDateEnd">
          End of Studies{" "}
          <input
            type="date"
            id="studyDateEnd"
            name="studyDateEnd"
            value={end}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button onClick={handleEdit}>Submit</button>
      </form>
    </>
  );
}

export default EducationPieceEdit;
