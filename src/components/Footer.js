import { FaInstagram, FaCopyright } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-items-end bg-slate-200/30 mt-56 ">
      <div>
        <p>R.G</p>
      </div>
      <div className="flex text-xl justify-center space-x-2">
        <FaInstagram />
        <FiMail />
      </div>
      <div className="flex items-center space-x-1">
        <FaCopyright />
        <span className="text-sm">Copyright 2022</span>
        <h4 className="text-slate-700 text-sm">Derechos reservados</h4>
      </div>
    </div>
  );
};

export default Footer;
