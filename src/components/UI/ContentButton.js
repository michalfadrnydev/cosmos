import React, {useContext} from "react";
import "./ContentButton.scss";


const ContentButton = (props) => {
    return (
       <button className="content-button">
        <span className="content-button__number">{props.number}</span>
        <span className="content-button__title">{props.title}</span>
       </button> 
    )
}

export default ContentButton;