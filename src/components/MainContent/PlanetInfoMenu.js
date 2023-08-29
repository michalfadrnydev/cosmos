import React, {useContext} from "react";
import PickedPlanetContext from "../../data/picked-planet-context";
import "./MainContent.scss";

const PlanetInfoMenu = () => {
    const pickedPlanetCtx = useContext(PickedPlanetContext);

    return (
        <ul className="planet-menu">
            <li onClick={pickedPlanetCtx.showPlanetOver}>OVERVIEW</li>
            <li onClick={pickedPlanetCtx.showPlanetStruct}>STRUCTURE</li>
            <li onClick={pickedPlanetCtx.showPlanetGeo}>SURFACE</li>
        </ul>
    )
}

export default PlanetInfoMenu;