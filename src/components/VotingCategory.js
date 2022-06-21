import { Link } from 'react-router-dom'
const VotingCategory = ({category}) => {
    return (
        <div className="voting-category">
            <img alt='cubes' src={require('./images/cubes.png')}/>
            <p>{category}</p>
            <Link to={'/'}>
                <img src={require('./images/arrow-right.png')}/>
            </Link>
        </div>
    )
}

export default VotingCategory