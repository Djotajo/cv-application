function ImageDisplay({ backgroundUrl }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: backgroundUrl ? "none" : "1px solid black",
        backgroundColor: backgroundUrl ? "transparent" : "white",
      }}
    >
      {/* Other content */}
    </div>
  );
}

export default ImageDisplay;
