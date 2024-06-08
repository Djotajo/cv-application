import { useState } from "react";
import NewLanguage from "./newLanguage";
import LanguageCompleted from "./languageCompleted";
import LanguageEdit from "./languageEdit";

function LanguageInfo({
  languageArray,
  handleLanguageArrayChange,
  handleRemoveLanguage,
  handleEditLanguage,
  handleSubmitLanguage,
}) {
  // const [educationArray, setEducationArray] = useState([]);
  const [addNew, setAddNew] = useState(false);

  function editArray(newObject) {
    handleLanguageArrayChange(newObject);
    addItem();
    console.log(languageArray);
  }

  function addItem() {
    setAddNew(!addNew);
    console.log(addNew);
  }
  let list = [];

  if (languageArray) {
    list = languageArray.map((piece) =>
      piece.edit === true ? (
        <LanguageEdit
          language={piece.language}
          level={piece.level}
          id={piece.id}
          handleEditItem={handleSubmitLanguage}
          key={piece.id}
        />
      ) : (
        <LanguageCompleted
          language={piece.language}
          level={piece.level}
          key={piece.id}
          id={piece.id}
          handleEditItem={handleEditLanguage}
          handleRemoveItem={handleRemoveLanguage}
        />
      )
    );
  }

  return (
    <>
      <fieldset>
        <legend>
          <h2>Languages</h2>
        </legend>

        <button onClick={addItem}>Add new</button>
        {addNew ? (
          <NewLanguage
            languageArray={languageArray}
            handleAdd={editArray}
            handleCancel={addItem}
          />
        ) : (
          <span></span>
        )}
        {list}
      </fieldset>
    </>
  );
}

export default LanguageInfo;
