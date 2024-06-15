function FileInput({ onChange }) {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.size / 1024 / 1024 > 2) {
      alert("File size exceeds 2MB");
    } else {
      onChange(selectedFile);
    }
  };

  return (
    <input
      type="file"
      accept=".png,.jpg,.jpeg,.webp,image/png"
      onChange={handleFileChange}
      id="addProfilePicture"
    />
  );
}

export default FileInput;
