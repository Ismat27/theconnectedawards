import { Link } from 'react-router-dom'
const VotingCategory = ({category}) => {
    return (
        <Link to={'/vote'} className="voting-category">
            <img alt='cubes' src={require('./images/cubes.png')}/>
            <p>{category}</p>
                <img src={require('./images/arrow-right.png')}/>
        </Link>
    )
}

export default VotingCategory