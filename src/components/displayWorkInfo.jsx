import { useState } from "react";
import DisplayWorkItem from "./displayWorkItem";

import Icon from "@mdi/react";

function DisplayWorkInfo({ array }) {
  const list = array.map((item) =>
    item.edit === true ? null : (
      <DisplayWorkItem
        company={item.companyName}
        city={item.city}
        country={item.country}
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
      <hr className="sectionHeaderLine" />
      <section className="displayEducationInfo">
        <ul>{list}</ul>
      </section>
    </>
  );
}

export default DisplayWorkInfo;
