import DisplayLanguage from "./displayLanguage";

function DisplayLanguageInfo({ array }) {
  const list = array.map((item) =>
    item.edit === true ? null : (
      <DisplayLanguage
        language={item.language}
        level={item.level}
        key={item.id}
        id={item.id}
      />
    )
  );

  return (
    <>
      <h2>Language proficiency</h2>
      <hr className="sectionHeaderLine" />
      <section className="displayEducationInfo">
        <ul>{list}</ul>
      </section>
    </>
  );
}

export default DisplayLanguageInfo;
