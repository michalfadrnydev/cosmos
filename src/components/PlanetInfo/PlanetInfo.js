import React, {useContext} from "react";

import PlanetsContext from "../../data/planets-context";
import myImage from "../../assets/planet-pict/full/1.png";
import sourceIcon from "../../assets/icons/external-link.png";
import DataCard from "./DataCard";

import "./PlanetInfo.scss";

const PlanetInfo = () => {
    const ctx = useContext(PlanetsContext);
    return (
        <div className="planet-info">
            <div className="planet-info__image">
                <img src={myImage} alt="planet"/>
            </div>
            <div> {/*dodefinovat classu aby se mi to nepropisovalo do data card*/}
                <h2>{ctx[0].name}</h2>
                <p>{ctx[0].intstr}</p>
                <span>
                    Source: <a href={ctx[0].source} target="_blank">Wikipedia</a>
                    <img src={sourceIcon}/>
                </span>
                <DataCard title="ROTATION TIME" number={ctx[0].rottime}/>
                <DataCard title="REVOLUTION TIME" number={ctx[0].revtime}/>
                <DataCard title="RADIUS" number={ctx[0].radius}/>
                <DataCard title="AVARAGE TEMP." number={ctx[0].avtemp}/>
            </div>
        </div>
    )
}

export default PlanetInfo;