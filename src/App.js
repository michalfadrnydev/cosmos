import React, {useState, useContext, useEffect} from "react";
import PickedPlanetProvider from "./data/PickedPlanetProvider";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import MobileMenu from "./components/Header/MobileMenu";

import "./styles/main.scss"

function App() {
  const[showMobileMenu, setShowMobileMenu] = useState(false);

  const showMobileMenuHandler = () => {
    setShowMobileMenu((prevIsShown) => {
      return !prevIsShown;
    });
  }
  
  return (
    <PickedPlanetProvider>
      <Header onShowMenu={showMobileMenuHandler}/>
      <MainContent/>
      {showMobileMenu && <MobileMenu/>}
    </PickedPlanetProvider>
  );
}

export default App;
