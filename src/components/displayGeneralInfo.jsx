import { useState } from "react";
import GeneralInfo from "./generalInfo";
import Icon from "@mdi/react";
import FileUpload from "./fileUpload";
import { mdiEmailOutline } from "@mdi/js";
import { mdiPhoneOutline } from "@mdi/js";
import { mdiOpenInNew } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";

import "./displayGeneralInfo.css";
import ImageDisplay from "./imageDisplay";
import FileInput from "./fileInput";

function DisplayGeneralInfo({
  firstName,
  lastName,
  title,
  city,
  country,
  email,
  phone,
  page,
  profileImg,
}) {
  function printCV() {
    window.print();
  }

  return (
    <>
      <section className="displayGeneralInfo">
        <h1>
          {firstName} {lastName}
        </h1>
        <div className="row">
          <div className="personalInfo">
            {" "}
            <ImageDisplay backgroundUrl={profileImg} />
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
        <button onClick={printCV} className="noPrint">
          Print
        </button>
        <hr className="generalInfoLine print" />
      </section>
    </>
  );
}

export default DisplayGeneralInfo;
