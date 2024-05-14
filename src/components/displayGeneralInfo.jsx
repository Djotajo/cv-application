import { useState } from "react";
import GeneralInfo from "./generalInfo";

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
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{title}</h2>
      <h3>
        {city}
        {country}
      </h3>
      <h4>{email}</h4>
      <h4>{phone}</h4>
      <h4>
        <a href={page}>Web Page</a>
      </h4>
    </>
  );
}

export default DisplayGeneralInfo;
