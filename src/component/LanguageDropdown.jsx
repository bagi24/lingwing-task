import React, { useState } from "react";

const LanguageDropdown = ({ languages }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countryAbbreviation, setCountryAbbreviation] = useState(
    selectedLanguage.name.slice(0, 3)
  );

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setCountryAbbreviation(language.name.slice(0, 3));
    setIsDropdownOpen(false);
  };

  const handleFlagClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAbbreviationClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="language-dropdown">
      <div className="flag-container" onClick={handleFlagClick}>
        <img
          className="flag-img"
          src={selectedLanguage.flagUrl}
          alt={`${selectedLanguage.name} Flag`}
        />
        {isDropdownOpen && (
          <ul className="lang-ul">
            {languages.map((language) => (
              <li
                className="lang-li"
                key={language.name}
                onClick={() => handleLanguageChange(language)}
              >
                <img
                  className="flag-img"
                  src={language.flagUrl}
                  alt={`${language.name} Flag`}
                />
                {language.name}
              </li>
            ))}
          </ul>
        )}
        <div className="abbreviation" onClick={handleAbbreviationClick}>
          {countryAbbreviation.toUpperCase()}
          <span className="arrow">
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
