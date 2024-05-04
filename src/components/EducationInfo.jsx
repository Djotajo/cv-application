function EducationInfo() {
  return (
    <>
      <h2>Education</h2>
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
        <button>Submit</button>
      </form>
    </>
  );
}

export default EducationInfo;
