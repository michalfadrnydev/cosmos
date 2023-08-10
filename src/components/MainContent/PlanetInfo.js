import React, {useContext, useState} from "react";

import PickedPlanetContext from "../../data/picked-planet-context";
import ContentButton from "../UI/ContentButton";

import myImage from "../../assets/planet-pict/full/1.png";
import sourceIcon from "../../assets/icons/external-link.png";

import "./MainContent.scss";

const PlanetInfo = () => {
    const pickedPlanetCtx = useContext(PickedPlanetContext);
    const hoverColor = pickedPlanetCtx.color;

    const [isButtonHovered0, setButtonHovered0] = useState(null);
    const [isButtonHovered1, setButtonHovered1] = useState(null);
    const [isButtonHovered2, setButtonHovered2] = useState(null);

    const handleMouseEnter = (buttonIndex) => {
        switch (buttonIndex) {
            case 0:
                setButtonHovered0(true);
                break;
            case 1:
                setButtonHovered1(true);
                break;
            case 2:
                setButtonHovered2(true);
                break;
            default:
                break;
        }
    };

    const handleMouseLeave = (buttonIndex) => {
        switch (buttonIndex) {
            case 0:
                setButtonHovered0(null);
                break;
            case 1:
                setButtonHovered1(null);
                break;
            case 2:
                setButtonHovered2(null);
                break;
            default:
                break;
        }
    };

    return (
        <div className="planet">
            <div className="planet-image-container">
                <img src={pickedPlanetCtx.img} alt="planet"/>
            </div>
            <div className="planet-info">
                <div className="planet-info__text">
                    {<h2>{pickedPlanetCtx.name}</h2>}
                    <p>{pickedPlanetCtx.mainText}</p>
                    <span>
                        Source: <a href={pickedPlanetCtx.source} target="_blank">Wikipedia</a>
                        <img src={sourceIcon}/>
                    </span>
                </div>
                <div className="planet-info__menu">
                    <ContentButton 
                        onClick={pickedPlanetCtx.showPlanetOver} 
                        number="01" 
                        title="OVERVIEW"
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                        style = {{
                            backgroundColor: isButtonHovered0 ? hoverColor : "#070724"
                        }}
                    />
                    <ContentButton 
                        onClick={pickedPlanetCtx.showPlanetStruct} 
                        number="02" 
                        title="INTERNAL STRUCTURE"
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                        style = {{
                            backgroundColor: isButtonHovered1 ? hoverColor : "#070724"
                        }}
                        />
                    <ContentButton 
                        onClick={pickedPlanetCtx.showPlanetGeo}
                        number="03" 
                        title="SURFACE GEOLOGY"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                        style = {{
                            backgroundColor: isButtonHovered2 ? hoverColor : "#070724"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default PlanetInfo;