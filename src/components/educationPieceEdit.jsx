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
        <fieldset>
          <div>
            <label htmlFor="schoolName">School Name </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
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
            />
          </div>

          <div>
            <label htmlFor="studyDateStart">Start of Studies </label>
            <input
              type="date"
              id="studyDateStart"
              name="studyDateStart"
              value={start}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="studyDateEnd">End of Studies </label>
            <input
              type="date"
              id="studyDateEnd"
              name="studyDateEnd"
              value={end}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <button onClick={handleEdit}>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default EducationPieceEdit;
