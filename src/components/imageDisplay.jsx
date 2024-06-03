import person from "../assets/person.png";

function ImageDisplay({ backgroundUrl }) {
  return (
    <div className="profilePictureDiv">
      {backgroundUrl ? (
        <img
          src={backgroundUrl}
          alt="profile picture"
          className="profilePicture"
        />
      ) : (
        <img
          src={person}
          alt="profile picture silhouette"
          className="profilePicture"
        />
      )}
      {/* Other content */}
    </div>
  );
}

export default ImageDisplay;
