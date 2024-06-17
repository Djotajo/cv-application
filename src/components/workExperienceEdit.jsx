import { useState } from "react";

function WorkExperienceEdit({
  company,
  city,
  country,
  position,
  responsibilities,
  startDate,
  endDate,
  id,
  workArray,
  setWorkArray,
  handleSubmitEditedItem,
}) {
  const [companyName, setCompanyName] = useState(company);
  const [cityName, setCity] = useState(city);
  const [countryName, setCountry] = useState(country);
  const [jobPosition, setJobPosition] = useState(position);
  const [mainResponsibilities, setMainResponsibilities] =
    useState(responsibilities);
  const [jobStartDate, setJobStartDate] = useState(startDate);
  const [jobEndDate, setJobEndDate] = useState(endDate);
  const [ongoing, setOngoing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (e) => {
    setOngoing(e.target.checked);
    if (e.target.checked) {
      setJobEndDate("ongoing");
    } else {
      setJobEndDate(endDate);
    }
  };

  function handleEdit(event) {
    event.preventDefault();

    if (
      companyName.trim() !== "" &&
      cityName.trim() !== "" &&
      countryName.trim() !== "" &&
      jobPosition.trim() !== "" &&
      mainResponsibilities.trim() !== "" &&
      jobStartDate.trim() !== "" &&
      jobEndDate.trim() !== ""
    ) {
      setErrorMessage("");
      const editedItem = {
        id: id,
        companyName: companyName,
        cityName: cityName,
        countryName: countryName,
        jobPosition: jobPosition,
        responsibilities: mainResponsibilities,
        jobStartDate: jobStartDate,
        jobEndDate: jobEndDate,
        edit: false,
      };
      handleSubmitEditedItem(workArray, setWorkArray, id, editedItem);
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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
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
              value={cityName}
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
              value={countryName}
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
              value={jobPosition}
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
              rows="4"
              cols="50"
              value={mainResponsibilities}
              onChange={(e) => setMainResponsibilities(e.target.value)}
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
              value={jobStartDate}
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
              value={jobEndDate === "ongoing" ? "" : jobEndDate}
              onChange={(e) => setJobEndDate(e.target.value)}
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

export default WorkExperienceEdit;
