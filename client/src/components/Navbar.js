import React, { useState } from 'react';
// import './App.css';
import './CSS/navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faHouse , faUser} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
   const [openLinks, setOpenLinks] = useState(false);
 
   const toggleNavbar = () => {
     setOpenLinks(!openLinks);
   };
   return (
     <nav>
      <div className="nav-wrapper" >
         <Link className="navbar-brand" to={'/Home'}> 
            MatchBox
         </Link>
         <ul className="nav-list">
            <li>
            <Link className="nav-link" to={'/Home'}>
               <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
            </li>
            
            <li>
            <Link className="nav-link" to={'/Likes'}>
               <FontAwesomeIcon icon={faHeart} /> Likes
            </Link>
            </li>
   
            <li>
            <Link className="nav-link" to={'/Upload'}>
               Upload
            </Link>
            </li>
   
            <li>
            <Link className="nav-link" to={'/about'}>
               About
            </Link>
            </li>
   
            {/* drop down menu for account icon */}
     
            <div className ="account-icon" >
               <FontAwesomeIcon icon={faUser} />
               <ul className = "acct-drop-down">
                  <li>
                     <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                     <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                  <Link to="/login">Login</Link>
                  </li>
               </ul>
            
            </div>

            {/* expand collapse  */}
            <div className = "hamburger-icon">            
               <FontAwesomeIcon icon={faBars} /> 
            </div>
         </ul>
      </div>
   </nav>
   );
 }
 
 export default Navbar;
 