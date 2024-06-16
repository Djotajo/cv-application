import { useState } from "react";
import NewLanguage from "./newLanguage";
import LanguageCompleted from "./languageCompleted";
import LanguageEdit from "./languageEdit";

function LanguageInfo({
  languageArray,
  setLanguageArray,
  handleArrayChange,
  handleRemoveItem,
  handleEditLanguage,
  handleSubmitLanguage,
}) {
  const [addNew, setAddNew] = useState(false);

  function addItem() {
    setAddNew(!addNew);
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
          languageArray={languageArray}
          setLanguageArray={setLanguageArray}
          handleEditItem={handleEditLanguage}
          handleRemoveItem={handleRemoveItem}
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
            setLanguageArray={setLanguageArray}
            handleArrayChange={handleArrayChange}
            addNew={addNew}
            setAddNew={setAddNew}
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
