import { motion } from "framer-motion";

const EmailModal = ({ emailSent, setEmailSent }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("fixed")) {
      setEmailSent(false);
    }
  };
  return (
    <>
      {emailSent && (
        <motion.div
          onClick={handleClick}
          className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-slate-100 text-2xl">Gracias por contactarnos!</h2>
        </motion.div>
      )}
    </>
  );
};

export default EmailModal;
