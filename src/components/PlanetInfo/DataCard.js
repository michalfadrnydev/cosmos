import "./DataCard.scss";

const DataCard = (props) => {
    return(
        <div className = {`${props.className} ${"data-card"}`}>
            <p className="data-card__title">{props.title}</p>
            <p className="data-card__number">{props.number}</p>
        </div>
    )
}

export default DataCard;