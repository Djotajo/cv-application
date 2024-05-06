function EducationPieceCompleted({
  name,
  title,
  startDate,
  endDate,
  id,
  handleRemoveItem,
}) {
  function handleRemove(event) {
    event.preventDefault();

    handleRemoveItem(id);
  }
  return (
    <>
      <p>School Name - {name}</p>
      <p>Title Earned - {title}</p>
      <p>Start of Studies - {startDate}</p>
      <p>End of Studies - {endDate}</p>
      <button>Edit</button>
      <button onClick={handleRemove}>Remove</button>
    </>
  );
}

export default EducationPieceCompleted;
