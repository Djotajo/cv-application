import "./displayGeneralInfo.css";
import ImageDisplay from "./imageDisplay";

function DisplayGeneralInfo({ firstName, lastName, title, profileImg }) {
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
