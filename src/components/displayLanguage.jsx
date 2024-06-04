function DisplayLanguage({ language, level, id }) {
  return (
    <>
      <li className="itemDisplay">
        <h3>
          {language} - {level}
        </h3>
      </li>
    </>
  );
}

export default DisplayLanguage;
