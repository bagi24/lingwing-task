import React, { useState } from 'react';
import EnFlag from "../images/eng_flag.png";
import EnParrot from "../images/eng_parrot.png";

const Content = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='content'>
      <div className='content-header'>
        <h1 className='h1'>
          დაიწყე <strong className='h1-1'> უცხო ენაზე </strong>  საუბარი დღესვე
        </h1>
      </div>

      <div className='content-languages'>
        <div
          className='en-box'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <p className={isHovered ? 'hovered' : ''}>{isHovered ? 'დაწყება' : 'ინგლისური'}</p>
          <img className='en-Flag' src={EnFlag} alt="" />
          <img className='en-parrot' src={EnParrot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Content;