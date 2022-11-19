import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "../UserContext"
import './Form.css'

const Login = () => {
    const [, setUser] = useContext(UserContext)
    const navigate = useNavigate()
    const [userInput, setUserInput] = useState({email: '', password:''})

    function formSubmit(event) {
        // perform some validation with the user inputs
        // update user details upon validation
        setUser({name: 'Williams Chinedu', points: 70})
        navigate('/')
        event.preventDefault()
    }

    function collectUserInput(event) {
        const {name, value} = event.target
        setUserInput(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    return (
        <main className="form-container">
            <div className="form">
                <div className="center">
                    <h1>Let's pick up where we left off yeah?</h1>
                    <h4 className="form-action">Login into your account</h4>
                    <p className="change-form">Don't have an account? <Link className="orange" to={'/register'}>Sign Up</Link></p>
                    <button className="btn google-btn">Continue with Google</button>
                </div>
                <form onSubmit={formSubmit}>
                    <div className="alt-break">
                        <span className="bar"></span>
                        <span className="or">or</span>
                        <span className="bar"></span>
                    </div>
                    <div className="email form-field">
                        <label htmlFor="email">Email Address</label>
                        <input onChange={collectUserInput} type={'email'} name='email' id="email" value={userInput.email} required/>
                    </div>
                    <div className="password form-field">
                        <label htmlFor="password">Password</label>
                        <input onChange={collectUserInput} type={'password'} name='password' id="password" value={userInput.password} required/>
                    </div>
                    <button type="submit" className="btn submit-btn">Log in</button>
                    <p className="center form-end forgot-password">
                        <Link to={'/'} className="blue">Forgot password?</Link>
                    </p>
                </form>
            </div>
        </main>
    )
}

export default Login