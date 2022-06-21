import './Donate.css'
const Donate = () => {
    return (
        <>
            <div className="center donate-top">
                <h1 className="center-header">Make a Donation</h1>
                <p className="grey center-intro">Make a contribution to the growth of technology in Africa</p>
            </div>
            <div className="donate-flex">
                <img alt="book cover" className='book-cover' src={require('./images/notebook.png')}/>
                <div className="donate-part"> 
                    <form className="donate-form">
                        <label htmlFor="amount">Enter Donation Amount</label>
                        <div>
                            <span className="currency">$</span>
                            <input type={'number'} className="amount" name="amount" id="amount"/>
                        </div>
                        <button className='btn submit-btn' type="submit">Make Donation</button>
                    </form>
                    <p className=''>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    </p>
                    <ul className="style-list donate-objs">
                        <li>The Connected Hack-ton in Major Cities across Africa</li>
                        <li>The Peer to Gear  Competition for Secondary School Students in Africa</li>
                        <li>Marathon Events across various Cities in Africa </li>
                        <li>Tech-awareness across various schools, towns and villages in Africa </li>
                        <li>Empowering more ladies in tech to bring a balance to the African ecosystem</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Donate