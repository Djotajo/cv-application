import { useState } from "react";

function GeneralInfo({
  name,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  email,
  onMailChange,
  phone,
  onPhoneChange,
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [firstName, setFirstName] = useState(name);
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

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
