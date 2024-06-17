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
          // src={person}
          src="https://www.escapistmagazine.com/wp-content/uploads/2024/02/Shogun_FX_Yoshii_Toranaga.jpg?w=1200"
          alt="profile picture silhouette"
          className="profilePicture"
        />
      )}
    </div>
  );
}

export default ImageDisplay;
