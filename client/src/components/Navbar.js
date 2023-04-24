import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
   faBars, 
   faHeart, 
   faHouse, 
   faUser, 
   faCircleInfo,
   faFileArrowUp
 } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  

  // dropdown menu
   const [showDropMenu, setDropMenu] = useState(false);
    const toggleDropMenu = () => {
    setDropMenu(!showDropMenu);
  };

  // sidebar
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
         <Link className="navbar-brand" to={'/'}> 
            MatchBox
         </Link>

        {/* hamburger menu */}
        <div className="hiddenLinks">
          <Link to="/" className = "house-icon"> <FontAwesomeIcon icon={faHouse} /></Link>
          <Link to="/likes" className = "heart-icon" > <FontAwesomeIcon icon={faHeart} /></Link>
          <Link to="/upload" className = "upload-icon"> <FontAwesomeIcon icon={faFileArrowUp} /> Upload </Link>
          <Link to="/profile" className = "profile-icon"><FontAwesomeIcon icon={faUser}/> Profile</Link>
         
        </div>
      </div>

        {/* links for navbar */}
      <div className="rightSide">
        <Link to="/" className = "house-icon"> <FontAwesomeIcon icon={faHouse} /> Home </Link>
        <Link to="/likes" className = "heart-icon" > <FontAwesomeIcon icon={faHeart} /> Likes </Link>
        <Link to="/upload" className = "upload-icon"> <FontAwesomeIcon icon={faFileArrowUp} /> Upload </Link>

        <Link to="/profile" className="profile-icon dropdown">
          <FontAwesomeIcon icon={faUser}/> Profile
          <div className="dropdown-content">
            <Link to="/profile/edit">Edit Profile</Link>
            <Link to="/profile/settings">Profile Settings</Link>
            <Link to="/profile/logout">Logout</Link>
           </div>
        </Link>



        {/* <Link to="/profile" className = "profile-icon"><FontAwesomeIcon icon={faUser}/> Profile
        </Link>
        <ul className = "acct-drop-down">
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
        </ul> */}
        {/* profile drop down */}
    
          


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
        <Link to="/profile" className="menu-link" onClick={toggleNavbar}>
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


 
