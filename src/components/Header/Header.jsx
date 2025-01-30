import React, { useState } from "react";
import "./Header.css";
import Bars from "../../assets/bars.png";
import Logo from "../../assets/logo.png";
// import { Link } from 'react-scroll';

// import {Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="Header ">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <a href="#home">
            <li onClick={() => setMenuOpened(false)}>Home</li>
          </a>
          <a href="#programs">
            <li onClick={() => setMenuOpened(false)}>Programs</li>
          </a>
          <li onClick={() => setMenuOpened(false)}>Why Us</li>
          <a href="#plan">
            <li onClick={() => setMenuOpened(false)}>Plants</li>
          </a>
          <a href="#testimonials">
            <li onClick={() => setMenuOpened(false)}>Testimonials</li>
          </a>
          {/* <li onClick={()=> setMenuOpened(false)}>
          <Link>Home</Link></li>
        <li onClick={()=> setMenuOpened(false)}>Programs</li>
        <li onClick={()=> setMenuOpened(false)}>Why Us</li>
        <li onClick={()=> setMenuOpened(false)}>Plants</li>
        <li onClick={()=> setMenuOpened(false)}><Link to='Testimonials' span={true} smooth={true}>Testimonials</Link></li> */}
        </ul>
      )}
    </div>
  );
};

export default Header;
