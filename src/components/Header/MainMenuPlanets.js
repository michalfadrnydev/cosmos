import React, {Fragment} from "react";
import ListOfPlanets from "./ListOfPlanets";
import "./MainMenuPlanets.scss"

const MainMenuPlanets = () => {
    return (
        <div className="main-menu-planets">
            <ListOfPlanets/>
        </div>
    )
}

export default MainMenuPlanets;