import React, { useState } from "react";
import "./DropdownNavItem.css"; // Import your CSS file

const DropdownNavItem = ({ linkText, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <li
      className="nav-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className="nav-link" href="#">
        {linkText}
      </a>
      {isOpen && (
        <div className="dropdown-content">
          {dropdownContent}
        </div>
      )}
    </li>
  );
};

export default DropdownNavItem;
