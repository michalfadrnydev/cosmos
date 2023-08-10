import React, {useContext} from "react";

import PickedPlanetContext from "../../data/picked-planet-context";

import DataCard from "./DataCard";

import "./MainContent.scss";

const PlanetData = () => {
    const pickedPlanetCtx = useContext(PickedPlanetContext);

    return (
        <div className="planet-data">
            <DataCard 
                title="ROTATION TIME" 
                number={pickedPlanetCtx.rotation}
            />
            <DataCard title="REVOLUTION TIME" 
                number={pickedPlanetCtx.revolution}
            />
            <DataCard 
                title="RADIUS" 
                number={pickedPlanetCtx.radius}
            />
            <DataCard 
                title="AVARAGE TEMP." 
                number={pickedPlanetCtx.temperature}
            />
        </div>
    )
}

export default PlanetData;