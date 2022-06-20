import { Link } from "react-router-dom";
const Footer = () => {
    return (
            <footer>
                <div className="footer-starter">
                    <div className="footer-info about">
                        <h3>About</h3>
                        <ul className="about-list">
                            <li><Link to={'/about'}>The Connected Magazine</Link></li>
                            <li><Link to={'/past'}>Past Editions</Link></li>
                            <li><Link to={'/celebs'}>Celebrated Techies</Link></li>
                        </ul>
                    </div>
                    <div className="footer-info legal">
                        <h3>Legal</h3>
                        <ul className="legal-list">
                            <li><Link to={''}>Terms of Service</Link></li>
                            <li><Link to={''}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-info social">
                        <h3>Social</h3>
                        <ul className="social-list">
                            <li><Link to={'/'}>LinkedIn</Link></li>
                        </ul>
                    </div>
                    <div className="footer-info contact">
                        <h3>Contact</h3>
                        <ul className="contact-list">
                            <li><Link to={'/'}>+2349012345678</Link></li>
                            <li><Link to={'/'}>Chat on Whatsapp</Link></li>
                            <li><Link to={'/'}>connectedawards@gmail.com</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-end">
                    <img alt="logo" src={require('./images/footer-logo.png')}/>
                    <div>
                        <p>Celebrating Techies Globally</p>
                        <p>&copy;2022 The Conected Awards - All rights reserved</p>
                    </div>
                </div>
            </footer>
    )
}

export default Footer