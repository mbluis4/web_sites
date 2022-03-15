import useStorage from "../hooks/useStorage";

const ProgressBar = ({ files, setFiles }) => {
  const { url, progress } = useStorage(files);
  //console.log(url);
  return <></>;
};

export default ProgressBar;
