import React, { useState } from 'react';
import '../CSS/settings.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Settings() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
  };

  return (
    <div className="sidebar">
      <ul>
        <li className="dropdown">
          <button className="sidebar-btn" onClick={toggleDropdown}>
            Dropdown <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Option 1</a>
            </li>
            <li>
              <a href="#">Option 2</a>
            </li>
            <li>
              <a href="#">Option 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Settings;