import React, {useContext} from "react";

import PlanetsContext from "../../data/planets-context";
import ContentButton from "../UI/ContentButton";

import myImage from "../../assets/planet-pict/full/1.png";
import sourceIcon from "../../assets/icons/external-link.png";

import "./MainContent.scss";

const PlanetInfo = () => {
    const ctx = useContext(PlanetsContext);
    return (
        <div className="planet">
            <div className="planet-image-container">
                <img src={myImage} alt="planet"/>
            </div>
            <div className="planet-info">
                <div className="planet-info__text">
                    <h2>{ctx[0].name}</h2>
                    <p>{ctx[0].overview}</p>
                    <span>
                        Source: <a href={ctx[0].source} target="_blank">Wikipedia</a>
                        <img src={sourceIcon}/>
                    </span>
                </div>
                <div className="planet-info__menu">
                    <ContentButton number="01" title="OVERVIEW"/>
                    <ContentButton number="02" title="INTERNAL STRUCTURE"/>
                    <ContentButton number="03" title="SURFACE GEOLOGY"/>
                </div>
            </div>
        </div>
    )
}

export default PlanetInfo;