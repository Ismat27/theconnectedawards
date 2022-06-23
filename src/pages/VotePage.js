import './VotePage.css'
import { Link } from "react-router-dom"
import VoteForm from "../components/VoteForm"


const VotePage = () => {
    const contestantElements = []

    for (let i=0; i<12; i++) {
        contestantElements.push(<VoteForm key={i}/>)
    }
    return (
        <main className="voting-page">
            <section className="center voting-section">
                <h1 className="title-case vote-category center-header">Exceptional Data Analyst</h1>
                <div className="search-menu">
                    <div className="search-action">
                        <img alt='search-icon' className="btn" src={require('./images/search-icon.png')}/>
                        <input placeholder="Nominee's Name"/>
                    </div>
                    <button className="btn action-btn search-btn">Search</button>
                </div>
                <p className="avail-points">You have&nbsp;<span className='vote-power'>70</span>&nbsp;votes left</p>
                <p className='increase-power'>Increase your voting power <Link to={'/'}>Here</Link></p>
            </section>
            <div className="contestants">
                {contestantElements}
            </div>
        </main>
    )
} 

export default VotePage
