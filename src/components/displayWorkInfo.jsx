import { useState } from "react";
import DisplayWorkItem from "./displayWorkItem";

import Icon from "@mdi/react";

function DisplayWorkInfo({ array }) {
  const list = array.map((item) =>
    item.edit === true ? null : (
      <DisplayWorkItem
        company={item.companyName}
        position={item.jobPosition}
        responsibilities={item.responsibilities}
        startDate={item.jobStartDate}
        endDate={item.jobEndDate}
        key={item.id}
        id={item.id}
        // handleEditItem={editItem}
        // handleRemoveItem={removeItem}
      />
    )
  );

  return (
    <>
      <h2>Work Experience</h2>
      <section className="displayEducationInfo">{list}</section>
    </>
  );
}

export default DisplayWorkInfo;
