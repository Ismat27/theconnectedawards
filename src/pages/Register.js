import { Link } from "react-router-dom"
import './Form.css'
const Register = () => {
    return (
        <main className="form-container">
            <div className="form">
                <div className="center">
                    <h1>Time to vote your favourite Techie, let's make this amazing!</h1>
                    <h4 className="form-action">Create an Account</h4>
                    <p className="change-form">Have an account? <Link className="orange" to={'/login'}>Log in</Link></p>
                    <button className="btn google-btn">Continue with Google</button>
                </div>
                <form>
                    <div className="alt-break">
                        <span className="bar"></span>
                        <span className="or">or</span>
                        <span className="bar"></span>
                    </div>
                    <div className="fullname form-field">
                        <div className="firstname">
                            <label htmlFor="firstname">First Name</label>
                            <input type={'text'} name='firstname' id="firstname" required/>
                        </div>
                        <div className="lastname">
                            <label htmlFor="lastname">Last Name</label>
                            <input type={'text'} name='lastname' id="lastname" required/>
                        </div>
                    </div>
                    <div className="email form-field">
                        <label htmlFor="email">Email Address</label>
                        <input type={'email'} name='email' id="email" required/>
                    </div>
                    <div className="phone form-field">
                        <label htmlFor="phone">Phone Number</label>
                        <input type={'tel'} name='phone' id="phone" required/>
                    </div>
                    <div className="password form-field">
                        <label htmlFor="password">Set Password</label>
                        <input type={'password'} name='password' id="password" required/>
                    </div>
                    <select className="gender form-field">
                        <option value={'Male'}>Male</option>
                        <option value={'Female'}>Female</option>
                        <option value={'NA'}>Prefer not to say</option>
                    </select>
                    <p className="form-end center">
                        By registering you agree to Techtrend Africa's 
                        <Link to={'/'} className="orange"> Terms of Use</Link> and 
                        <Link to={'/'} className="orange"> Privacy Policy</Link> 
                    </p>
                    <button type="submit" className="btn submit-btn">Create my account</button>
                </form>
            </div>
        </main>
    )
}

export default Register