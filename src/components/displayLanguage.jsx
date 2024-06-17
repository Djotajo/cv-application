function DisplayLanguage({ language, level, id }) {
  return (
    <>
      <li className="itemDisplay">
        <p>
          {language} - {level}
        </p>
      </li>
    </>
  );
}

export default DisplayLanguage;
