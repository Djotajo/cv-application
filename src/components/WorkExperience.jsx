function WorkExperience() {
  return (
    <>
      <h2>Work Experience</h2>
      <form action="#">
        <label htmlFor="companyName">
          Company Name <input type="text" id="companyName" name="companyName" />
        </label>
        <label htmlFor="positionTitle">
          Position <input type="text" id="positionTitle" name="positionTitle" />
        </label>
        <label htmlFor="mainResponsibilities">
          Main Responsibilities{" "}
          <textarea
            id="mainResponsibilities"
            name="mainResponsibilities"
            rows="4"
            cols="50"
          />
        </label>
        <label htmlFor="workDateStart">
          Start of Work{" "}
          <input type="date" id="workDateStart" name="workDateStart" />
        </label>
        <label htmlFor="workDateEnd">
          End of Work <input type="date" id="workDateEnd" name="workDateEnd" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default WorkExperience;
