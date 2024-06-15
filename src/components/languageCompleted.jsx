import { useState } from "react";

function LanguageCompleted({
  language,
  level,
  id,
  handleEditItem,
  handleRemoveItem,
}) {
  const [edit, setEdit] = useState(false);

  function handleRemove(event) {
    event.preventDefault();

    handleRemoveItem(id);
  }

  function handleEdit() {
    setEdit(true);
    console.log(edit);
    handleEditItem(id);
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
