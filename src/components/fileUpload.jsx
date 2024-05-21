import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [backgroundUrl, setBackgroundUrl] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (e) => {
      setBackgroundUrl(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Other content */}
      </div>
    </div>
  );
}

export default FileUpload;
