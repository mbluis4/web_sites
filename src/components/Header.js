import { useEffect, useState, useRef } from "react";
import logo from "../images/logo.png";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import CustomLink from "./CustomLink";

import { Link, Outlet } from "react-router-dom";

const Header = () => {
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
        rounded mx-auto pb-2 px-2 shadow-xl opacity-90"
        >
          <div className="flex">
            <div className="flex items-center py-2">
              <div className="mr-2 text-xl">
                <img src={logo} className="w-10"></img>
              </div>
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

          <div className="hidden sm:flex justify-between space-x-3 items-center">
            <CustomLink to="cart" className="text-xl">
              <FaShoppingCart />
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
            className="navi flex flex-col items-center py-5 space-y-2 text-slate-300 
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
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Header;

{
  /* <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>Logo</h2>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={`${url}`}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="links contact-link" ref={contactRef}>
          <Link to="contact">
            <p>Contacto</p>
          </Link>
        </div>
      </div>
    </nav> */
}

/*       useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
          contactRef.current.style.height = `${linksHeight}px`;
          linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
          contactRef.current.style.height = "0px";
          linksContainerRef.current.style.height = "0px";
        }
      }, [showLinks]); */
