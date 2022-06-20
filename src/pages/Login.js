import { Link } from "react-router-dom"
import './Form.css'
const Login = () => {
    return (
        <main className="form-container">
            <div className="form">
                <div className="center">
                    <h1>Let's pick up where we left off yeah?</h1>
                    <h4 className="form-action">Login into your account</h4>
                    <p className="change-form">Don't have an account? <Link className="orange" to={'/register'}>Sign Up</Link></p>
                    <button className="btn google-btn">Continue with Google</button>
                </div>
                <form>
                    <div className="alt-break">
                        <span className="bar"></span>
                        <span className="or">or</span>
                        <span className="bar"></span>
                    </div>
                    <div className="email form-field">
                        <label htmlFor="email">Email Address</label>
                        <input type={'email'} name='email' id="email" required/>
                    </div>
                    <div className="password form-field">
                        <label htmlFor="password">Set Password</label>
                        <input type={'password'} name='password' id="password" required/>
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