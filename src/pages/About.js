import './About.css'
const About = () => {
    return (
        <>
            <div className="center about-top">
                <h1 className='center-header'>
                    The Connected Awards
                </h1>
                <p className='grey center-intro'>Learn about us</p>
            <img alt="heroes" src={require('./images/heroes2.png')}/>
            </div>
            <section className="about-section">
                <div className="about">
                    <h1>Connecting Techies Globally</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <img alt="heroes" src={require('./images/heroes.png')}/>
            </section>
           
        </>
    )
}

export default About