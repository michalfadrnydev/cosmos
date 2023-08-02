import Header from "./components/Header/Header";
import MenuMobileIcon from "./components/Header/MenuMobileIcon";
import PlanetInfo from "./components/PlanetInfo/PlanetInfo";

import "./styles/main.scss"

function App() {
  return (
    <>
      <Header/>
      <main>
        <PlanetInfo/>
     </main>
    </>
  );
}

export default App;
