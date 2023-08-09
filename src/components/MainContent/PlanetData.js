import React, {useContext} from "react";

import PlanetsContext from "../../data/planets-context";
import DataCard from "./DataCard";

import "./MainContent.scss";

const PlanetData = () => {
    const ctx = useContext(PlanetsContext);
    return (
        <div className="planet-data">
            <DataCard title="ROTATION TIME" number={ctx[0].rottime}/>
            <DataCard title="REVOLUTION TIME" number={ctx[0].revtime}/>
            <DataCard title="RADIUS" number={ctx[0].radius}/>
            <DataCard title="AVARAGE TEMP." number={ctx[0].avtemp}/>
        </div>
    )
}

export default PlanetData;