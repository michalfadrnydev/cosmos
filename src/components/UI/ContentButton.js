import React, {useContext} from "react";
import "./ContentButton.scss";


const ContentButton = (props) => {
    return (
        <button className="content-button" onClick={props.onClick} style={props.style} onMouseLeave={props.onMouseLeave} onMouseEnter={props.onMouseEnter}>
            <span className="content-button__number">{props.number}</span>
            <span className="content-button__title">{props.title}</span>
        </button> 
    )
}

export default ContentButton;