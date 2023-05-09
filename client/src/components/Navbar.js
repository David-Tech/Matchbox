import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CSS/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faHeart,
  faHouse,
  faUser,
  faCircleInfo,
  faFileArrowUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenLinks(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };


  // sidemenu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link className="navbar-brand" to={"/Matchbox"}>
          MatchBox
        </Link>

        {/* <Link to="/upload" className="upload-icon">
            <FontAwesomeIcon icon={faFileArrowUp} /> Upload{" "}
          </Link> */}


        {/* hamburger menu */}
        <div className="hiddenLinks">
          <Link to="/Matchbox" className="house-icon">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link to="/likes" className="heart-icon">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/upload" className="upload-icon">
            <FontAwesomeIcon icon={faFileArrowUp} />
          </Link>
       
          <Link to="/" className="profile-icon">
            <FontAwesomeIcon icon={faUser} /> 
          </Link>
        </div>
      </div>

      {/* links for navbar */}
      <div className="rightSide">
        <Link to="/Matchbox" className="house-icon">
          <FontAwesomeIcon icon={faHouse} /> Home{" "}
        </Link>
        <Link to="/likes" className="heart-icon">
          <FontAwesomeIcon icon={faHeart} /> Likes{" "}
        </Link>
        <Link to="/upload" className="upload-icon">
          <FontAwesomeIcon icon={faFileArrowUp} /> Upload{" "}
        </Link>

        <div className="profile-icon dropdown"
          onClick={handleDropdownClick}
          ref={dropdownRef}>
          <FontAwesomeIcon icon={faUser} /> Account{" "}
          <FontAwesomeIcon icon={faCaretDown} />
          <div className="dropdown-content">
            {/* <Link to="/profile/edit">Edit Profile</Link> */}
            <Link to="/profile">Profile</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile/settings">Settings</Link>
          </div>
        </div>
        
        {/* <Link to="/about" className = "about-icon"><FontAwesomeIcon icon={faCircleInfo}/> About </Link> */}
    
        <button onClick={toggleNavbar}>
         <FontAwesomeIcon className ="hamburger-icon" icon={faBars} /> 
        </button>

      {/* side menu */}
        <div className={`side-menu ${openLinks ? 'show' : ''}`}>
          <Link to="/" className="menu-link" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faHouse} /> Home
          </Link>
          <Link to="/likes" className="menu-link" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faHeart} /> Likes
          </Link>
          <Link to="/upload" className="menu-link" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faFileArrowUp} /> Upload
          </Link>
          <Link to="/" className="menu-link" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
          <Link to="/about" className="menu-link" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faCircleInfo} /> About
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Navbar;


 
