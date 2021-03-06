import { motion } from "framer-motion";

const Modal = ({ selected, setSelected }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("fixed")) {
      setSelected(null);
    }
  };
  return (
    <>
      {selected && (
        <motion.div
          onClick={handleClick}
          className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src={selected}
            alt="enlarged"
            className="relative block max-h-screen max-w-lg mx-auto shadow-lg border-white border-4"
          />
        </motion.div>
      )}
    </>
  );
};

export default Modal;
