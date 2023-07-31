import React, {Fragment, useState, useEffect} from "react";

import MenuIcon from "./MenuIcon";
import MenuPlanets from "./MenuPlanets";

import "./Header.scss";

const Header = () => {

    return (
        <header className="main-header">
            <h1>THE PLANETS</h1>
            {/*<MenuIcon color="white"/>*/}
            <MenuPlanets/>
        </header>
    )
}

export default Header;