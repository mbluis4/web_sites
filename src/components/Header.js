import { useEffect, useState, useRef, useContext } from "react";
import logo from "../images/logo.png";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { ItemContext } from "../hooks/CartContext";
import { motion } from "framer-motion";

import { Outlet } from "react-router-dom";
const Header = () => {
  const { cart } = useContext(ItemContext);
  const [showLinks, setShowLinks] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    showLinks && navRef.current.classList.toggle("nav-active");

    return;
  }, [showLinks]);

  return (
    <>
      <nav>
        <div
          className="flex justify-between items-center max-w-7xl bg-red-300 
        rounded mx-auto pb-2 px-2 shadow-lg opacity-90"
        >
          <div className="flex">
            <div className="flex items-center py-2">
              <CustomLink to="/" className="hover:text-gray-800">
                <div className="mr-2 text-xl">
                  <img src={logo} alt="RG soaps logo" className="w-10"></img>
                </div>
              </CustomLink>
              <div className="hidden sm:flex space-x-3 text-white">
                <CustomLink to="/" className="hover:text-gray-800">
                  Inicio
                </CustomLink>
                <CustomLink to="products" className="hover:text-gray-800">
                  Productos
                </CustomLink>
                <CustomLink to="gallery" className="hover:text-gray-800">
                  Galería
                </CustomLink>
                {/* <CustomLink to="upload" className="hover:text-gray-800">
                  Upload
                </CustomLink> */}
              </div>
            </div>
          </div>

          <div className="hidden sm:flex justify-between space-x-4 items-center">
            <CustomLink to="cart" className="text-xl">
              <motion.div className="relative">
                <FaShoppingCart />
                {cart.length > 0 && (
                  <motion.div
                    className="flex items-center justify-center w-6 
                   h-6 text-sm absolute -z-10 -top-4 -right-3 text-center bg-red-500 rounded-full border-0 font-bold no-underline"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    {cart.length}
                  </motion.div>
                )}
              </motion.div>
            </CustomLink>
            <CustomLink
              to="contact"
              className="py-1 px-3 items-center mr-1 bg-red-400 text-rose-800 rounded hover:text-gray-800"
            >
              Contacto
            </CustomLink>
          </div>

          <div className="sm:hidden flex text-lg">
            <button onClick={() => setShowLinks((prev) => !prev)}>
              <FaBars />
            </button>
          </div>
        </div>
        {showLinks && (
          <div
            className="navi flex flex-col items-center py-5 space-y-3 text-slate-300 
          fixed right-0 bg-slate-500 h-screen w-1/2 z-10 translate-x-full ease-in duration-300"
            ref={navRef}
          >
            <CustomLink
              to="/"
              className="hover:text-gray-800"
              onClick={() => setShowLinks(false)}
            >
              Inicio
            </CustomLink>
            <CustomLink
              to="products"
              className="hover:text-gray-800"
              onClick={() => setShowLinks(false)}
            >
              Productos
            </CustomLink>
            <CustomLink
              to="gallery"
              className="hover:text-gray-800"
              onClick={() => setShowLinks(false)}
            >
              Galería
            </CustomLink>
            <CustomLink
              to="contact"
              className=""
              onClick={() => setShowLinks(false)}
            >
              Contacto
            </CustomLink>
            <CustomLink to="cart" className="text-xl">
              <div className="relative">
                <FaShoppingCart />
                {cart.length > 0 && (
                  <div className="flex items-center justify-center w-5 h-5 text-xs absolute -z-10 -top-3 -right-3 text-center bg-red-600 rounded-full border-0 font-bold no-underline">
                    {cart.length}
                  </div>
                )}
              </div>
            </CustomLink>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
