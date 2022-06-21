import { Link } from "react-router-dom"
const FutureEdition = ({region}) => {
    return (
        <div className="center title-case future-edition">
            <img alt="map" src={require('./images/map.png')}/>
            <h3 className="region">{region}</h3>
            <Link to={'/nominate'}>Nominate</Link>
        </div>
    )
}

export default FutureEdition