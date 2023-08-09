import React, {useContext, useState} from "react";
import PlanetsContext from "./planets-context";
import PickedPlanetContext from "./picked-planet-context";

const PickedPlanetProvider = (props) => {
    const planetCtx = useContext(PlanetsContext);
    const [pickedPlanet, setPickedPlanet] = useState(planetCtx[0]);

    console.log(pickedPlanet);
    
    const setPlanetHandler = (planetName) => {
        const planetObject = planetCtx.find(planet => planet.name === planetName)
        console.log(planetObject);
        setPickedPlanet(planetObject);
        
    }

    const planet = {
        actual: pickedPlanet,
        setPlanet: setPlanetHandler
    }

    return (
        <PickedPlanetContext.Provider value = {planet}>
            {props.children}
        </PickedPlanetContext.Provider>
    )
}

export default PickedPlanetProvider;