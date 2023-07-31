const MenuIcon = (props) => {
    return (
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="3" fill={props.color}/>
            <rect y="7" width="24" height="3" fill={props.color}/>
            <rect y="14" width="24" height="3" fill={props.color}/>
        </svg>
    )
}

export default MenuIcon;