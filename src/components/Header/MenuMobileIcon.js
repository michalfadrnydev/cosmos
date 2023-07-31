import React, {Fragment} from "react";
import "./Header.scss"

const MenuMobileIcon = (props) => {
    return (
        <span className="main-header__menu">
            <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="3" fill={props.color}/>
                <rect y="7" width="24" height="3" fill={props.color}/>
                <rect y="14" width="24" height="3" fill={props.color}/>
            </svg>
        </span>
    )
}

export default MenuMobileIcon;