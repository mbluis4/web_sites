import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const UploadFiles = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files;
    //console.log(selected);
    const fileList = [];
    for (let i = 0; i < selected.length; i++) {
      const file = selected[i];
      if (file && types.includes(file.type)) {
        fileList.push(file);
      } else {
        setFiles(null);
        setError("please select an image file (png or jpeg)");
      }
    }
    setFiles(fileList);

    /*  if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("please select an image file (png or jpeg)");
    } */
  };
  console.log(files);
  return (
    <form>
      <input type="file" onChange={handleChange} multiple="multiple" />
      {files.length > 0 && <div>{files.length} files uploading</div>}
      {files.length > 0 && <ProgressBar files={files} setFile={setFiles} />}
    </form>
  );
};

export default UploadFiles;
