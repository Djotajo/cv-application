import { useState } from "react";
import GeneralInfo from "./generalInfo";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { mdiPhoneOutline } from "@mdi/js";
import { mdiOpenInNew } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";

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
              <Icon path={mdiMapMarker} size={1} viewBox="5 2 14 20" /> {city},{" "}
              {country}
            </h3>
          </div>
          <div className="contactInfo">
            {" "}
            <h4>
              <Icon path={mdiEmailOutline} size={1} /> {email}
            </h4>
            <h4>
              <Icon path={mdiPhoneOutline} size={1} /> {phone}
            </h4>
            <h4>
              <Icon path={mdiOpenInNew} size={1} /> <a href={page}>Web Page</a>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default DisplayGeneralInfo;
