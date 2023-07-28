import lingwingLogo from "../images/lingwing-logo.svg";


const Header = () => {
  return (
    <div>
      <span>
        
        <i className="fa-sharp fa-solid fa-bars"></i>
      </span>
      <span>
        
        <img src={lingwingLogo} alt="lingwing Logo" />
      </span>

     
    </div>
  );
};

export default Header;
