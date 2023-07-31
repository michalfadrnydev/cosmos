import React, {Fragment, useState, useEffect} from "react";

import MenuMobileIcon from "./MenuMobileIcon"
import MenuPlanets from "./MenuPlanets";

import "./Header.scss"

const Header = () => {

    return (
        <header className="main-header">
            <h1>THE PLANETS</h1>
            <MenuMobileIcon color="white"/>
            <MenuPlanets/>
        </header>
    )
}

export default Header;