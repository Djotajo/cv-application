import { useState } from "react";
import GeneralInfo from "./generalInfo";
import EducationPieceCompleted from "./educationPieceCompleted";
import DisplayEducationItem from "./displayEducationItem";

import Icon from "@mdi/react";

function DisplayEducationInfo({ array }) {
  const list = array.map((item) =>
    item.edit === true ? null : (
      <DisplayEducationItem
        name={item.schoolName}
        title={item.title}
        startDate={item.start}
        endDate={item.end}
        key={item.id}
        id={item.id}
        // handleEditItem={editItem}
        // handleRemoveItem={removeItem}
      />
    )
  );

  return (
    <>
      <h2>Education</h2>
      <section className="displayEducationInfo">
        {list}
        {/* <div className="row">
          <div className="personalInfo">
            {" "}
            <h1>
              {firstName} {lastName}
            </h1>
            <h2>{title}</h2>
            <h3>
              <Icon path={mdiMapMarker} size={1} /> {city}, {country}
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
        </div> */}
      </section>
    </>
  );
}

export default DisplayEducationInfo;
