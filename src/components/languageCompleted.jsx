import { useState } from "react";

function LanguageCompleted({
  language,
  level,
  id,
  languageArray,
  setLanguageArray,
  handleEditItem,
  handleRemoveItem,
}) {
  const [edit, setEdit] = useState(false);

  function handleRemove(event) {
    event.preventDefault();

    handleRemoveItem(languageArray, setLanguageArray, id);
  }

  function handleEdit() {
    setEdit(true);
    handleEditItem(languageArray, setLanguageArray, id);
  }

  return (
    <>
      <div className="eduItem">
        <p className="itemParagraph">
          {language} - {level}
        </p>
        <div className="eduItemButtons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default LanguageCompleted;
