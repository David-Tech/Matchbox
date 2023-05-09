import React, { useState } from 'react';
import '../CSS/settings.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown,  faUser } from '@fortawesome/free-solid-svg-icons';

function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  // <FontAwesomeIcon icon={faUser} /> 
  return (
    <div className="sidebar">
      <ul>
        <li className="dropdown">
        <button className="sidebar-btn" onClick={toggleDropdown}>Account <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <ul  className={`dropdown-menu ${isOpen ? 'show' : ''}`} >
            <li>
              <a  href="#" className ="sub-item">Personal Infomation</a>
            </li>
    
            <li>
              <a href="#" className ="sub-item">Notification</a>
            </li>
          </ul>
        </li>

        <li className={`dropdown ${isOpen ? 'shift-down' : ''}`}>
          <button className="sidebar-btn " onClick={toggleDropdown2}>
            Subscription <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <ul className={`dropdown-menu ${isOpen2 ? 'show' : ''}`}>
            <li>
              <a href="#" className ="sub-item">Subscription Plan</a>
            </li>
            <li>
              <a href="#" className ="sub-item">Billing</a>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  );
}

export default Settings;
