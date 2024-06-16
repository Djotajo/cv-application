import DisplayEducationItem from "./displayEducationItem";

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
      />
    )
  );

  return (
    <>
      <h2>Education</h2>
      <hr className="sectionHeaderLine" />
      <section className="displayEducationInfo">
        <ul>{list}</ul>
      </section>
    </>
  );
}

export default DisplayEducationInfo;
