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
      <section className="displayEducationInfo">{list}</section>
    </>
  );
}

export default DisplayEducationInfo;
