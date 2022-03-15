import { useState } from "react";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav>
        <div className="flex justify-between items-center max-w-7xl bg-red-300 rounded mx-auto py-2 px-2">
          <div className="flex">
            <div className="flex items-center py-2">
              <div className="mr-2 text-xl">
                <img src={logo} className="w-10"></img>
              </div>
              <div className="hidden md:flex space-x-3 text-white">
                <Link to="/" className="hover:text-gray-800">
                  Inicio
                </Link>
                <Link to="products" className="hover:text-gray-800">
                  Productos
                </Link>
                <Link to="gallery" className="hover:text-gray-800">
                  Galería
                </Link>
                <Link to="upload" className="hover:text-gray-800">
                  Upload
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center mr-1 bg-red-400 text-rose-800 rounded hover:text-gray-800">
            <Link to="contact" className="py-1 px-3">
              Contacto
            </Link>
          </div>

          <div className="md:hidden flex text-lg">
            <button onClick={() => setShowLinks((prev) => !prev)}>
              <FaBars />
            </button>
          </div>
        </div>
        {showLinks && (
          <div className="md:hidden flex flex-col text-gray-800">
            <Link to="/" className="hover:text-gray-800">
              Inicio
            </Link>
            <Link to="products" className="hover:text-gray-800">
              Productos
            </Link>
            <Link to="gallery" className="hover:text-gray-800">
              Galería
            </Link>
            <Link to="contact" className="">
              Contacto
            </Link>
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
