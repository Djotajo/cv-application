import { useState } from "react";

function GeneralInfo() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
          <h2>General Info</h2>
          <label htmlFor="firstName">
            First Name{" "}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="lastName">
            Last Name{" "}
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            E-mail{" "}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="phone">
            Phone{" "}
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h2>Success</h2>
        <p>First name - {firstName}</p>
        <p>Last name - {lastName}</p>
        <p>Email - {email}</p>
        <p>Phone - {phone}</p>
        <button onClick={handleEdit}>Edit</button>
      </>
    );
  }
}

export default GeneralInfo;
