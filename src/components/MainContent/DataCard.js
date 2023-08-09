import "./DataCard.scss";

const DataCard = (props) => {
    return(
        <div className = {`${props.className} ${"data-card"}`}>
            <span className="data-card__title">{props.title}</span>
            <span className="data-card__number">{props.number}</span>
        </div>
    )
}

export default DataCard;