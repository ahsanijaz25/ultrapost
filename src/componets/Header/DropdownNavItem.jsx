import React, { useState } from "react";
import "./DropdownNavItem.css"; // Import your CSS file
import { Link } from "react-router-dom";

const DropdownNavItem = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsOpen(false);
  // };

  return (
    <li
      className="nav-item"
      onMouseEnter={() => props.setHoveredItem("PC Gamer")}
      onMouseLeave={() => props.setHoveredItem(null)}
    >
      <Link className="nav-link" to="/">
        {props.linkText}
      </Link>
    </li>
  );
};

export default DropdownNavItem;
