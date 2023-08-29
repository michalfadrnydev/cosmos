import Modal from "../UI/Modal";
import ListOfPlanets from "./ListOfPlanets";
import "./MobileMenu.scss"

const MobileMenu = (props) => {
    const setVisibilityMobileMenu = (visibleMobileMenu) => {
        props.hideMobileMenu(visibleMobileMenu);
    }

    return (
        <Modal className="mobile-menu-planets">
            <ListOfPlanets onChangePlanet={setVisibilityMobileMenu}/>
        </Modal>
    )
}

export default MobileMenu;