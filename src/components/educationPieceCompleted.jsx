function EducationPieceCompleted({ name, title, startDate, endDate }) {
  return (
    <>
      <p>School Name - {name}</p>
      <p>Title Earned - {title}</p>
      <p>Start of Studies - {startDate}</p>
      <p>End of Studies - {endDate}</p>
      <button>Edit</button>
    </>
  );
}

export default EducationPieceCompleted;
