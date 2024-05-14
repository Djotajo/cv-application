import { useState } from "react";
import GeneralInfo from "./generalInfo";

function DisplayGeneralInfo({ firstName, lastName, email, phone }) {
  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{email}</h2>
      <h2>{phone}</h2>
    </>
  );
}

export default DisplayGeneralInfo;
