import React, {useContext} from "react";

import PlanetInfoMenu from "./PlanetInfoMenu";
import PlanetInfo from "./PlanetInfo";
import PlanetData from "./PlanetData";

import PickedPlanetContext from "../../data/picked-planet-context";

const MainContent = () => {
    const pickedPlanetCtx = useContext(PickedPlanetContext);
    return (
        <>
            <PlanetInfoMenu/>
            <PlanetInfo/>
            <PlanetData/>
        </>
    )
}

export default MainContent;