import { useState } from "react";
import EducationPieceEdit from "./educationPiece";
import EducationPieceCompleted from "./educationPieceCompleted";

function EducationInfo() {
  const [educationArray, setEducationArray] = useState([
    {
      id: 1,
      schoolName: "1",
      title: "1",
      start: "1",
      end: "1",
    },
    {
      id: 2,
      schoolName: "2",
      title: "2",
      start: "2",
      end: "2",
    },
    {
      id: 3,
      schoolName: "3",
      title: "3",
      start: "3",
      end: "3",
    },
  ]);

  // function editArray(){
  //   setEducationArray(educationArray.push())
  // }

  const list = educationArray.map((piece) => (
    <EducationPieceCompleted
      name={piece.schoolName}
      title={piece.title}
      startDate={piece.start}
      endDate={piece.end}
      key={piece.id}
    />
  ));
  return (
    <>
      <h2>Education</h2>
      <EducationPieceEdit educationArray={educationArray} />
      {list}
      <EducationPieceCompleted
        name="ime"
        title="titula"
        startDate="1"
        endDate="2"
      />
    </>
  );
}

export default EducationInfo;
