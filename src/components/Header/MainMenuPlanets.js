import React, {Fragment} from "react";
import ListOfPlanets from "./ListOfPlanets";
import "./MainMenuPlanets.scss"

const MainMenuPlanets = () => {
    const noHideHandler = () => {
    }

    return (
        <div className="main-menu-planets">
            <ListOfPlanets onChangePlanet={noHideHandler}/>
        </div>
    )
}

export default MainMenuPlanets;