import DisplayWorkItem from "./displayWorkItem";

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
