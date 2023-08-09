import React, {useState, useContext} from "react";
import PlanetsContext from "../../data/planets-context";
import PickedPlanetContext from "../../data/picked-planet-context";
import "./ListOfPlanets.scss"

const ListOfPlanets = () => {
    const ctx = useContext(PlanetsContext);
    const pickedPlanetCtx = useContext(PickedPlanetContext);
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (planetName) => {
        setIsHovered(planetName);
    }

    const handleMouseLeave = () => {
        setIsHovered(null);
    }

    return (
        <ul className="list-of-planets">
            {ctx.map(planet => (
                <li 
                    className="menu-item"
                    key={planet.name}
                    onMouseEnter={() => handleMouseEnter(planet.name)}
                    onMouseLeave={handleMouseLeave}
                    onClick = {() => pickedPlanetCtx.setPlanet(planet.name)}
                    style = {{
                        borderColor: isHovered === planet.name ? planet.color : "transparent",
                    }}
                >
                    <div className="menu-item__planet"></div>
                    <p className="menu-item__name">{planet.name}</p>
                </li>
                )
            )}
        </ul>
    )
}

export default ListOfPlanets;