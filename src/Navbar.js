import React, { useState, useEffect } from 'react'
import './navbar.css';

export default function Navbar() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);


  return (

    <div className={`nav ${show && "nav__black"}`}>
      <a href="/">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
          alt="netflix logo"
        />
      </a>

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix logo"
      />
    </div>
  )
}
