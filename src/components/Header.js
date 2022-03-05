import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../data";
import { Link } from "react-router-dom";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      contactRef.current.style.height = `${linksHeight}px`;
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      contactRef.current.style.height = "0px";
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
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
    </nav>
  );
};

export default Header;
