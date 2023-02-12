export const filereaderHandler = (mainImg, setImg, fileUploadPrimary) => {
  // inputFile
  if (fileUploadPrimary.files[0]) {
    let primaryReader = new FileReader(); // fileReader Object
    primaryReader.readAsDataURL(fileUploadPrimary.files[0]);
    primaryReader.onload = () => {
      setImg(primaryReader.result);
    };
  }
};
