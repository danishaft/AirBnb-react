import { FaStar } from "react-icons/fa"

function Card(props){
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={props.coverImg} alt={props.title} className="card--photo" />
                <div className="card-stats">
                    <FaStar className="star" />
                    <span>{props.stats.rating}</span>
                    <span className="grey">({props.stats.reviewCount})</span>
                    <span className="grey">USA</span>
                </div>
                <p>{props.title}</p>
                <p> <strong>${props.price}</strong> / person</p>
            </div>
    )
}

export default Card