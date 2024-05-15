import { useState } from "react";
import GeneralInfo from "./generalInfo";

import "./displayGeneralInfo.css";

function DisplayGeneralInfo({
  firstName,
  lastName,
  title,
  city,
  country,
  email,
  phone,
  page,
}) {
  return (
    <>
      <section className="displayGeneralInfo">
        <div className="row">
          <div className="personalInfo">
            {" "}
            <h1>
              {firstName} {lastName}
            </h1>
            <h2>{title}</h2>
            <h3>
              {city}
              {country}
            </h3>
          </div>
          <div className="contactInfo">
            {" "}
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <h4>
              <a href={page}>Web Page</a>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default DisplayGeneralInfo;
