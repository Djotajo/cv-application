function FileInput({ onChange }) {
  // function validateSize(input) {
  //   const fileSize = input.files[0].size / 1024 / 1024; // in MiB
  //   if (fileSize > 2) {
  //     alert("File size exceeds 2 MiB");
  //     // $(file).val(''); //for clearing with Jquery
  //   } else {
  //     // Proceed further
  //   }
  // }

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
