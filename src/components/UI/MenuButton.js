const ContentButton = (props) => {
    return (
       <button className="content-button">
        <span className="content-button__number">{props.number}</span>
        <span className="content-button__text">{props.title}</span>
       </button> 
    )
}

export default ContentButton;