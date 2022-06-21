import VotingCategory from "../components/VotingCategory"
import './VotingCategories.css'
const VotingCategories = () => {

    const categories = [
        'Exceptional Data Analyst', 'Promising Data Analyst', 'Exceptional Data Scientist',
        'Exceptional Visual Designer', 'Promising Visual Designer', 'Exceptional DevOps Expert',
        'Promising Data Scientist'
    ]

    function chooseRandom(array) {
        const index = Math.floor(Math.random() * array.length)
        return array[index]
    }

    const categoryElements = []
    for (let i=0; i<16; i++) {
        const category = chooseRandom(categories)
        categoryElements.push(<VotingCategory key={i} category={category}/>)
    }

    return (
        <>
            <div className="search-menu">
                <div className="search-action">
                    <img alt='search-icon' className="btn" src={require('./images/search-icon.png')}/>
                    <input placeholder="Nominee's Name"/>
                </div>
                <button className="btn action-btn search-btn">Search</button>
            </div>
            <div className="voting-categories">
                {categoryElements}
            </div>
        </>
    )
}

export default VotingCategories