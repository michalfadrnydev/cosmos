import React, {useState} from "react";
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
    <>
      <Header onShowMenu={showMobileMenuHandler}/>
      <MainContent/>
      {showMobileMenu && <MobileMenu/>}
    </>
  );
}

export default App;
