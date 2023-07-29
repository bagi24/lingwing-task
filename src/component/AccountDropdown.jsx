import React, { useState } from "react";
import AccountPhoto from "../images/profilefoto.jpg";

const AccountDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFlagClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAbbreviationClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="acc-dropdown">
      <div className="acc-container" onClick={handleFlagClick}>
        <img className="profile-img" src={AccountPhoto} alt="Accphoto" />

        {isDropdownOpen && (
          <ul className="acc-ul">
            <li>ჩემი გვერდი</li>
            <li>პროფილი</li>
            <li>პაკეტის ყიდვა </li>
            <li>გადახდები</li>
            <li>კუპონის გააქტიურება</li>
            <li>გამოსვლა</li>
          </ul>
        )}
        <div className="acc-name" onClick={handleAbbreviationClick}>
          <span>
            <p>Bagrati</p>
          </span>
          <span className="arrow-white">
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
