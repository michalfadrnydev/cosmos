import React from "react";

import PlanetInfoMenu from "./PlanetInfoMenu";
import PlanetInfo from "./PlanetInfo";
import PlanetData from "./PlanetData";

const MainContent = () => {
    return (
        <>
            <PlanetInfoMenu/>
            <PlanetInfo/>
            <PlanetData/>
        </>
    )
}

export default MainContent;