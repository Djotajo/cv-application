function FileInput({ onChange }) {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    onChange(selectedFile);
  };

  return <input type="file" onChange={handleFileChange} />;
}

export default FileInput;
