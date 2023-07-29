import lingwingLogo from "../images/lingwing-logo.svg";
import GeFlag from "../images/Georgian-lang.png"
import EnFlag from "../images/English-lang.png"
import RuFlag from "../images/Russian-lang.png"
import SpFlag from "../images/Spanish-lang.png"
import TurFlag from "../images/Turkish-lang.png"
import BenFlag from "../images/Bengali-lang.png"
import LanguageDropdown from "./LanguageDropdown";
import AccountDropdown from "./AccountDropdown";

const Header = () => {

    const languages = [
        { name:  "Georgian", flagUrl: `${GeFlag}` },
        { name: "English", flagUrl: `${EnFlag}` },
        { name: "Russian", flagUrl: `${RuFlag}` },
        { name: "Spanish", flagUrl: `${SpFlag}` },
        { name: "Turkish", flagUrl: `${TurFlag}` },
        { name: "Bengali", flagUrl: `${BenFlag}` },
    
      ];


  return (
    <div className="header-conteiner">
        <div className="header-leftSide">

        <span className="fabars-menu">
        <i className="fa-sharp fa-solid fa-bars"></i>
      </span>
      <span className="lingwingLogo">
        <img className="lingwing-Logo" src={lingwingLogo} alt="lingwing Logo" />
      </span>

        </div>
     

      <div className="headr-rightSide">
     
      <LanguageDropdown  languages = {languages}/>


<div className="main-page">
<div className="square-container">
<span><i className="fa-solid fa-square"></i></span>
      <span><i className="fa-solid fa-square"></i></span>
      <span><i className="fa-solid fa-square"></i></span>
      <span><i className="fa-solid fa-square"></i></span>
</div>
<span> <p className="square-text">ჩემი გვერდი </p></span>

</div>


      

<AccountDropdown />

      </div>

     
    </div>
  );
};

export default Header;
