import React, {useContext} from "react";

import PickedPlanetContext from "../../data/picked-planet-context";

import DataCard from "./DataCard";

import "./MainContent.scss";

const PlanetData = () => {
    const pickedPlanetCtx = useContext(PickedPlanetContext);

    return (
        <div className="planet-data">
            <DataCard title="ROTATION TIME" number={pickedPlanetCtx.actual.rottime}/>
            <DataCard title="REVOLUTION TIME" number={pickedPlanetCtx.actual.revtime}/>
            <DataCard title="RADIUS" number={pickedPlanetCtx.actual.radius}/>
            <DataCard title="AVARAGE TEMP." number={pickedPlanetCtx.actual.avtemp}/>
        </div>
    )
}

export default PlanetData;