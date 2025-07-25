import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg modern-navbar sticky-top">
        <div className="container">
          <NavLink
            className="navbar-brand d-flex align-items-center"
            to="/"
            onClick={closeMenu}
          >
            <h1 className="text-primary fw-bold">Portfolio</h1>
          </NavLink>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link beautiful-link"
                    to={link.to}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              
            </ul>
          </div>
        </div>
      </nav>

      <style>{`
        .modern-navbar {
          background: linear-gradient(90deg, #ffffff, #f8f9fa);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          padding: 0.75rem 1rem;
          transition: background 0.3s ease;
        }

        .beautiful-link {
          color: #444;
          text-decoration: none;
          position: relative;
          transition: color 0.2s ease;
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          border-radius: 0.25rem;
          display: inline-block;
        }

        .beautiful-link:hover {
          color: #0d6efd;
        }

        .beautiful-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          width: 80%;
          height: 3px;
          background: black;
          border-radius: 5px;
          transition: transform 0.3s ease;
        }

        .beautiful-link:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        .beautiful-link.active {
          color: #0d6efd;
          font-weight: 600;
        }

        .beautiful-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .navbar-nav .btn {
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
