import React, {useContext} from "react";
import PlanetsContext from "../../data/planets-context";
import "./PlanetInfo.scss";

import myImage from "../../assets/planet-pict/full/1.png";
import sourceIcon from "../../assets/icons/external-link.png";


const PlanetInfo = () => {
    const ctx = useContext(PlanetsContext);
    return (
        <div className="planet-info">
            <img src={myImage} alt="planet"/>
            <div>
                <h2>{ctx[0].name}</h2>
                <p>{ctx[0].intstr}</p>
                <span>
                    Source: <a href={ctx[0].source} target="_blank">Wikipedia</a>
                    <img src={sourceIcon}/>
                </span>
            </div>
        </div>
    )
}

export default PlanetInfo;