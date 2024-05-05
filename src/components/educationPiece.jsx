function EducationPieceEdit({ educationArray }) {
  function handleSubmit() {
    educationArray.push({
      id: 0,
      schoolName: "",
      title: "",
      start: "",
      end: "",
    });
    console.log(educationArray);
  }
  return (
    <>
      <form action="#">
        <label htmlFor="schoolName">
          School Name <input type="text" id="schoolName" name="schoolName" />
        </label>
        <label htmlFor="studyTitle">
          Title Earned <input type="text" id="studyTitle" name="studyTitle" />
        </label>
        <label htmlFor="studyDateStart">
          Start of Studies{" "}
          <input type="date" id="studyDateStart" name="studyDateStart" />
        </label>
        <label htmlFor="studyDateEnd">
          End of Studies{" "}
          <input type="date" id="studyDateEnd" name="studyDateEnd" />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default EducationPieceEdit;
