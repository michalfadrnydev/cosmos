import React, {useState, useContext} from "react";
import PlanetsContext from "../../data/planets-context";
import "./ListOfPlanets.scss"

const ListOfPlanets = () => {
    const ctx = useContext(PlanetsContext);
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
                    style = {{
                        borderColor: isHovered === planet.name ? planet.color : "transparent",
                        color: isHovered === planet.name ? "white" : "rgba(255, 255, 255,  0.7)",
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