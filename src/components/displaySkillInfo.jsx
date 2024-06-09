import DisplaySkill from "./displaySkill";

function DisplaySkillInfo({ array }) {
  const list = array.map((item) =>
    item.edit === true ? null : (
      <DisplaySkill skill={item.skill} key={item.id} id={item.id} />
    )
  );

  return (
    <>
      <h2>Skills</h2>
      <hr className="sectionHeaderLine" />
      <section className="displayEducationInfo">
        <ul>{list}</ul>
      </section>
    </>
  );
}

export default DisplaySkillInfo;
