import React from "react";

import MercFullPic from "../assets/planet-pict/full/1.png";
import VenFullPic from "../assets/planet-pict/full/2.png";
import EarthFullPic from "../assets/planet-pict/full/3.png";
import MarsFullPic from "../assets/planet-pict/full/4.png";
import JupFullPic from "../assets/planet-pict/full/5.png";
import SatFullPic from "../assets/planet-pict/full/6.png";
import UranFullPic from "../assets/planet-pict/full/7.png";
import NeptFullPic from "../assets/planet-pict/full/8.png";

import MercIntPic from "../assets/planet-pict/internal/1.png";
import VenIntPic from "../assets/planet-pict/internal/2.png";
import EarthIntPic from "../assets/planet-pict/internal/3.png";
import MarsIntPic from "../assets/planet-pict/internal/4.png";
import JupIntPic from "../assets/planet-pict/internal/5.png";
import SatIntPic from "../assets/planet-pict/internal/6.png";
import UranIntPic from "../assets/planet-pict/internal/7.png";
import NeptIntPic from "../assets/planet-pict/internal/8.png";

import MercGeoPic from "../assets/planet-pict/structure/1.png";
import VenGeoPic from "../assets/planet-pict/structure/2.png";
import EarthGeoPic from "../assets/planet-pict/structure/3.png";
import MarsGeoPic from "../assets/planet-pict/structure/4.png";
import JupGeoPic from "../assets/planet-pict/structure/5.png";
import SatGeoPic from "../assets/planet-pict/structure/6.png";
import UranGeoPic from "../assets/planet-pict/structure/7.png";
import NeptGeoPic from "../assets/planet-pict/structure/8.png";


const PlanetsContext = React.createContext(
    [
        {
            name: "MERCURY",
            color: "#419EBB",
            overview: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            intStr: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            surfGeol: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
            rotTime: "58.6 DAYS",
            revTime: "87.97 DAYS",
            radius: "2,439.7 KM",
            avTemp: "430 °C",
            fullPic: MercFullPic,
            intPic: MercIntPic,
            geoPic: MercGeoPic
        },
        {
            name: "VENUS",
            color: "#EDA249",
            overview: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            intStr: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
            surfGeol: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
            source: "https://en.wikipedia.org/wiki/Venus",
            rotTime: "243 DAYS",
            revTime: "224.7 DAYS",
            radius: "6,051.8 KM",
            avTemp: "471 °C",
            fullPic: VenFullPic,
            intPic: VenIntPic,
            geoPic: VenGeoPic
        },
        {
            name: "EARTH",
            color: "#6D2ED5",
            overview: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            intStr: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
            surfGeol: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
            source: "https://en.wikipedia.org/wiki/Earth",
            rotTime: "1 DAY",
            revTime: "365.26 DAYS",
            radius: "6,371 KM",
            avTemp: "16 °C",
            fullPic: EarthFullPic,
            intPic: EarthIntPic,
            geoPic: EarthGeoPic
        },
        {
            name: "MARS",
            color: "#D14C32",
            overview: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
            intStr: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
            surfGeol: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
            source: "https://en.wikipedia.org/wiki/Mars",
            rotTime: "1.03 DAY",
            revTime: "1.88 YEARS",
            radius: "3,389.5 KM",
            avTemp: "-28 °C",
            fullPic: MarsFullPic,
            intPic: MarsIntPic,
            geoPic: MarsGeoPic
        },
        {
            name: "JUPITER",
            color: "#D83A34",
            overview: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
            intStr: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
            surfGeol: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            source: "https://en.wikipedia.org/wiki/Jupiter",
            rotTime: "9.93 HOURS",
            revTime: "11.86 YEARS",
            radius: "69,911 KM",
            avTemp: "-108 °C",
            fullPic: JupFullPic,
            intPic: JupIntPic,
            geoPic: JupGeoPic
        },
        {
            name: "SATURN",
            color: "#CD5120",
            overview: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            intStr: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
            surfGeol: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
            source: "https://en.wikipedia.org/wiki/Saturn",
            rotTime: "10.8 HOURS",
            revTime: "29.46 YEARS",
            radius: "58,232 KM",
            avTemp: "-138 °C",
            fullPic: SatFullPic,
            intPic: SatIntPic,
            geoPic: SatGeoPic
        },
        {
            name: "URANUS",
            color: "#1EC1A2",
            overview: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            intStr: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
            surfGeol: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            source: "https://en.wikipedia.org/wiki/Uranus",
            rotTime: "17.2 HOURS",
            revTime: "84 YEARS",
            radius: "25,362 KM",
            avTemp: "-195 °C",
            fullPic: UranFullPic,
            intPic: UranIntPic,
            geoPic: UranGeoPic
        },
        {
            name: "NEPTUNE",
            color: "#2D68F0",
            overview: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
            intStr: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
            surfGeol: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
            source: "https://en.wikipedia.org/wiki/Neptune",
            rotTime: "16.08 HOURS",
            revTime: "164.79 YEARS",
            radius: "24.622 KM",
            avTemp: "-201 °C",
            fullPic: NeptFullPic,
            intPic: NeptIntPic,
            geoPic: NeptGeoPic
        }
    ]
)

export default PlanetsContext;