import React from "react";
import Header from "./component/Header";
import LanguageDropdown from "./component/LanguageDropdown";
import GeFlag from "./images/Georgian-lang.png"
import EnFlag from "./images/English-lang.png"
import RuFlag from "./images/Russian-lang.png"
import SpFlag from "./images/Spanish-lang.png"
import TurFlag from "./images/Turkish-lang.png"
import BenFlag from "./images/Bengali-lang.png"



function App() {

  const languages = [
    { name:  "Georgian", flagUrl: `${GeFlag}` },
    { name: "English", flagUrl: `${EnFlag}` },
    { name: "Russian", flagUrl: `${RuFlag}` },
    { name: "Spanish", flagUrl: `${SpFlag}` },
    { name: "Turkish", flagUrl: `${TurFlag}` },
    { name: "Bengali", flagUrl: `${BenFlag}` },

  ];

  
  return (
    <div className="App">
      <Header />
      <LanguageDropdown  languages = {languages}/>
    
    </div>
  );
}

export default App;
