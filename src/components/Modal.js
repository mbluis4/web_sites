import { FaRegWindowClose } from "react-icons/fa";

const Modal = ({ selected, setSelected }) => {
  return (
    <>
      {selected && (
        <div className="absolute top-0 left-0 opacity-100">
          <img src={selected} alt="enlarged image"></img>
          <div
            onClick={() => setSelected(null)}
            className="absolute top-2 right-2 text-xl cursor-pointer"
          >
            <FaRegWindowClose />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
