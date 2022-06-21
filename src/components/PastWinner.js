const PastWinner = ({winner}) => {
    return (
        <div className="past-winner center">
            <img alt="past winner" src={require('../pages/images/award1.png')}/>
            <h3>{winner.name}</h3>
            <p>{winner.category}</p>
        </div>
    )
}

export default PastWinner
