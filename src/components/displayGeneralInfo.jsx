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
        <aside className="generalInfoAside">
          <ImageDisplay backgroundUrl={profileImg} />
        </aside>
        <div className="generalInfoMain">
          <h1>
            {firstName} {lastName}
          </h1>
          <h2>{title}</h2>
        </div>
      </section>
    </>
  );
}

export default DisplayGeneralInfo;
