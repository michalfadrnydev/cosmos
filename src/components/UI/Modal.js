import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = (props) => {
    const Backdrop = () => {
        return (
            <div className="modal-backdrop"></div>
        )
    }
    const ModalOverlay = (props) => {
        return(
            <div className="modal-content">{props.children}</div>
        )
    }
    const portalElement = document.getElementById("overlays");
    return (
        <div>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </div>
    )
}

export default Modal;