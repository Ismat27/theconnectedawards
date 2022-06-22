import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Profile from "./Profile";
const Navs = () => {
    const [showNav, setShowNav] = useState(false)
    function controlNav() {
        setShowNav(prevState => !prevState)
    }
    function closeNav() {
        setShowNav(false)
    }
    return (
        <header>
            <div className="header-div">
                <Link to={'/'}><img alt="logo" src={require('./images/nav-logo.png')}/></Link>
                <img alt="hamburger-menu" src={require('./images/menu.png')} className='hamburger btn' onClick={controlNav}/>
            </div>
            <nav className={`nav-menu ${showNav? 'show-nav': ''}`}>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink onClick={closeNav} to={'categories'}>Categories</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={closeNav} to={'past'}>Past editions</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={closeNav} to={'future'}>Future editions</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={closeNav} to={'about'}>About us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={closeNav} to={'donate'}>Make a donation</NavLink>
                    </li>
                </ul>
                <ul className="auth-items">
                    <li className="auth-item login-item">
                        <Link className="auth-link login-link" to={'login'}>Log In</Link>
                    </li>
                    <li className="auth-item reg-item">
                        <Link className="auth-link reg-link" to={'register'}>Create Account</Link>
                    </li>
                </ul>
                {/* <Profile name='ismail' points={70}/> */}
            </nav>
        </header>
    )
}

export default Navs