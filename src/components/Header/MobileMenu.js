import Modal from "../UI/Modal";
import ListOfPlanets from "./ListOfPlanets";
import "./MobileMenu.scss"

const MobileMenu = () => {
    return (
        <Modal className="mobile-menu-planets">
            <ListOfPlanets/>
        </Modal>
    )
}

export default MobileMenu;