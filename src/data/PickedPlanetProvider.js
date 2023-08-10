import React, {useContext, useState, useReducer} from "react";
import PlanetsContext from "./planets-context";
import PickedPlanetContext from "./picked-planet-context";

import MercFullPic from "../assets/planet-pict/full/1.png";


const defaultPlanet = {
    img: MercFullPic,
    name: "MERCURY",
    color: "#419EBB",
    mainText: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    rotation: "58.6 DAYS",
    revolution: "87.97 DAYS",
    radius: "2,439.7 KM",
    temperature: "430 °C",
}

const planetReducer = (state, action) => {
    const planets = action.planetCtx;
    const planetName = action.planetName;
    const planetObject = planets.find(planet => planet.name  === planetName);

    switch (action.type) {
        case "CHANGE-PLANET":
            return {
                ...state,
                img: planetObject.fullPic,
                name: planetObject.name,
                color: planetObject.color,
                mainText: planetObject.overview,
                source: planetObject.source,
                rotation: planetObject.rotTime,
                revolution: planetObject.revTime,
                radius: planetObject.radius,
                temperature: planetObject.avTemp,
            }
        case "SHOW-OVER":
            return {
                ...state,
                img: planetObject.fullPic,
                mainText: planetObject.overview
            }
        case "SHOW-STRUCT":
            return {
                ...state,
                img: planetObject.intPic,
                mainText: planetObject.intStr
            }
        case "SHOW-GEO":
            return {
                ...state,
                img: planetObject.geoPic,
                mainText: planetObject.surfGeol
            }
        default:
            return state;
    }
}

const PickedPlanetProvider = (props) => {
    const planetCtx = useContext(PlanetsContext);
    const[pickedPlanet, dispatchPlanetContentChange] = useReducer(planetReducer,defaultPlanet)
    
    const setPlanetHandler = (planetName) => {
        dispatchPlanetContentChange({type:"CHANGE-PLANET", planetName: planetName, planetCtx: planetCtx})
    }

    const showPlanetOver = () => {
        dispatchPlanetContentChange({type:"SHOW-OVER", planetName: pickedPlanet.name, planetCtx: planetCtx});
    }
    const showPlanetStruct = () => {
        dispatchPlanetContentChange({type:"SHOW-STRUCT", planetName: pickedPlanet.name, planetCtx: planetCtx});
    }

    const showPlanetGeo = () => {
        dispatchPlanetContentChange({type:"SHOW-GEO", planetName: pickedPlanet.name, planetCtx: planetCtx});
    }

    const planet = {
        img: pickedPlanet.img,
        name: pickedPlanet.name,
        color: pickedPlanet.color,
        mainText: pickedPlanet.mainText,
        source: pickedPlanet.source,
        rotation: pickedPlanet.rotation,
        revolution: pickedPlanet.revolution,
        radius: pickedPlanet.radius,
        temperature: pickedPlanet.temperature,
        setPlanet: setPlanetHandler,
        showPlanetOver: showPlanetOver,
        showPlanetStruct: showPlanetStruct,
        showPlanetGeo: showPlanetGeo,
    }

    return (
        <PickedPlanetContext.Provider value = {planet}>
            {props.children}
        </PickedPlanetContext.Provider>
    )
}

export default PickedPlanetProvider;