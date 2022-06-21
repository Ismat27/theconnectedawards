import './HomePage.css'
import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
        <>
            <section className="intro-section">
                <h1>First Ever Tech Personality Award For Africans in Europe</h1>
                <div className="search-menu">
                    <div className="search-action">
                        <img alt='search-icon' className="btn" src={require('./images/search-icon.png')}/>
                        <input placeholder="Nominee's Name"/>
                    </div>
                    <button className="btn action-btn search-btn">Search</button>
                </div>
                <p>
                    <span>View all categories</span> 
                    <Link to={'/categories'}><img alt='arrow' className="btn" src={require('./images/arrow-right.png')}/></Link>
                </p>
            </section>

            <section className="target-section">
                <h1>Our Target</h1>
                <div className="targets">
                    <div className="target">
                        <img alt='awareness' src={require('./images/awareness.png')}/>
                        <p>Awareness</p>
                    </div>
                    <div className="target">
                        <img alt='competition' src={require('./images/competition.png')}/>
                        <p>Competition</p>
                    </div>
                    <div className="target">
                        <img alt='entertainment' src={require('./images/entertainment.png')}/>
                        <p>Entertainment</p>
                    </div>
                    <div className="target">
                        <img alt='recognition' src={require('./images/recognition.png')}/>
                        <p>Recognition</p>
                    </div>
                </div>
            </section>

            <section className="connected">
                <div className="connected-awards">
                    <img alt="group" src={require('./images/connected.png')}/>
                    <div className="connected-div">
                        <h1 className="deco-header">The Connected Awards</h1>
                        <p>
                            The connected is.....It is a long established fact that a reader will be distracted by the readable content 
                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <button className="btn action-btn">Learn More</button>
                        <img alt='logo' className="quarter-logo ql2" src={require('./images/quarter-logo2.png')}/>
                    </div>
                </div>
            </section>

            <section className="celebrated">
                <div className="celebrated-techies">
                    <h1 className="deco-header">Celebrated Techies</h1>
                    <p>
                        The connected is.....It is a long established fact that a reader will be distracted by the readable content 
                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <button className="btn action-btn">Read More</button>
                    <img alt='logo' className="quarter-logo ql1" src={require('./images/quarter-logo1.png')}/>
                </div>
                <div className="award-grid">
                    <img alt='award' className="award" src={require('./images/award1.png')}/>
                    <img alt='award' className="award" src={require('./images/award2.png')}/>
                    <img alt='award' className="award" src={require('./images/award3.png')}/>
                    <img alt='award' className="award" src={require('./images/award4.png')}/>
                </div>
            </section>

            <div className="talents">
                <div className="talent">
                    <img alt='talent-cate' src={require('./images/ribbon.png')}/>
                    <h2>Promising Talent</h2>
                    <p>
                        Promising Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. 
                        Such individual are well recognized in their field for impacting with their skills.
                    </p>
                </div>
                <div className="talent">
                    <img alt='talent-cate' src={require('./images/star.png')}/>
                    <h2>Intermediate Talent</h2>
                    <p>
                        Intermediate Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. 
                        Such individual are well recognized in their field for impacting with their skills.
                    </p>
                </div>
                <div className="talent">
                    <img alt='talent-cate' src={require('./images/three_stars.png')}/>
                    <h2>Exceptional Talent</h2>
                    <p>
                        Exceptional Talent is an individual with more than 5 years experience in Nigeria technology ecosystem. 
                        Such individual are well recognized in their field for impacting with their skills.
                    </p>
                </div>
            </div>
        </>
    )
}

export default HomePage