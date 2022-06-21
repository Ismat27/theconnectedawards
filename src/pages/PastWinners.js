import PastWinner from "../components/PastWinner";

const PastWinners = () => {
    const winner = {
        name: 'Sarah Olalore',
        category: 'Exceptional Visual Designer'
    }
    const winnerElements = []
    for (let i=0; i<8; i++) {
        winnerElements.push(<PastWinner winner={winner}/>)
    }
    return (
        <>
            <div className="center winner-top">
                <h1 className="center-header">Celebrated Techies</h1>
                <p className="grey center-intro">A look into some of our past winners</p>
            </div>
            <div className="past-winners">
                {winnerElements}
            </div>
        </>
    )
}

export default PastWinners