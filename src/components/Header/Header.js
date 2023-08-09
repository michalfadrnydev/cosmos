import React, {useState} from "react";

import MobileMenuIcon from "./MobileMenuIcon"
import MainMenuPlanets from "./MainMenuPlanets";

import "./Header.scss";

const Header = (props) => {
    return (
        <>
            <header className="main-header">
                <h1>THE PLANETS</h1>
                <MobileMenuIcon onClick={props.onShowMenu} color="white"/>
                <MainMenuPlanets/>
            </header>
        </>
    )
}

export default Header;