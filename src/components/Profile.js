import './Profile.css'
import { Link } from 'react-router-dom'
const Profile = (props) => {
    const {name, points} = props
    return (
        <ul className="user-profile">
            <li className="user-points">
                <div className="points-container profile-info">
                    <img alt="point symbol" src={require('./images/point.png')}/>
                    <span className="points">{points}</span>
                </div>
            </li>
            <li className="drop-down-container username">
                <div className='profile-info'>
                    <img alt="profile-image" className="profile-image" src={require('./images/profile-image.png')}/>
                    <span className='title-case'>{name}</span>
                    <img src={require('./images/arrow-down.png')} className='drop-down-btn btn'/>
                </div>
                <ul className='drop-down-content'>
                    <li><Link to={'/'}>Log out</Link></li>
                </ul>
            </li>
        </ul>
    )
}

export default Profile