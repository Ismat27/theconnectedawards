import FutureEdition from "../components/FutureEdition";
import './Editions.css'
const FutureEditions = () => {
    const regions = [
        'east african', 'west african', 'north african', 'south african'
    ]
    const editionElements = []
    for (const region of regions) {
        editionElements.push(<FutureEdition key={region} region={region}/>)
    }
    return (
        <>
            <div className="center future">
                <h1 className="future-header center-header">Future Editions</h1>
                <p className="grey nominate center-intro">Nominate candidates for future editions</p>
            </div>
            <div className="future-editions">
                {editionElements}
            </div>
        </>
    )
}

export default FutureEditions