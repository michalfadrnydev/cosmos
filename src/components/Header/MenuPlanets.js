import React, {useState, useContext} from "react";
import PlanetsContext from "../../data/planets-context"
import "./MenuPlanets.scss";

const MenuPlanets = () => {
    const ctx = useContext(PlanetsContext);
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (planetName) => {
        setIsHovered(planetName);
    }

    const handleMouseLeave = () => {
        setIsHovered(null);
    }

    return (
        <ul className="menu-planets">
            {ctx.map(planet => 
                <li 
                    key={planet.name}
                    onMouseEnter={() => handleMouseEnter(planet.name)}
                    onMouseLeave={handleMouseLeave}
                    style = {{
                        borderColor: isHovered === planet.name ? planet.color : "transparent",
                        color: isHovered === planet.name ? "white" : "rgba(255, 255, 255,  0.7)",
                    }}
                >
                    {planet.name}
                </li>
            )}
        </ul>
    )
}

export default MenuPlanets;