import { useState } from "react";
import FileInput from "./fileInput";

function GeneralInfo({
  name,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  title,
  onTitleChange,
  city,
  onCityChange,
  country,
  onCountryChange,
  email,
  onMailChange,
  phone,
  onPhoneChange,
  page,
  onPageChange,
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function handleEdit(event) {
    event.preventDefault();
    setIsSubmitted(false);
  }

  if (!isSubmitted) {
    return (
      <>
        <form action="#">
          <fieldset>
            <legend>
              <h2>General Info</h2>
            </legend>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={name}
                onChange={(e) => onFirstNameChange(e)}
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => onLastNameChange(e)}
              />
            </div>

            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => onTitleChange(e)}
              />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(e) => onCityChange(e)}
              />
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={(e) => onCountryChange(e)}
              />
            </div>

            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => onMailChange(e)}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => onPhoneChange(e)}
              />
            </div>

            <div>
              <label htmlFor="page">Web Page</label>
              <input
                type="text"
                id="page"
                name="page"
                value={page}
                onChange={(e) => onPageChange(e)}
              />
            </div>

            <button onClick={handleSubmit}>Submit</button>
          </fieldset>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h2>General Info</h2>

        <div>
          <span className="gridItemText">First name</span>
          {/* <span className="gridItemInput">{firstName}</span> */}
        </div>

        <div>
          <span className="gridItemText">Last name</span>
          <span className="gridItemInput">{lastName}</span>
        </div>

        <div>
          <span className="gridItemText">Email</span>
          <span className="gridItemInput">{email}</span>
        </div>

        <div>
          <span className="gridItemText">Phone</span>
          <span className="gridItemInput">{phone}</span>
        </div>

        <button onClick={handleEdit}>Edit</button>
      </>
    );
  }
}

export default GeneralInfo;
