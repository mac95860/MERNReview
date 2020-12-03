import React, {useState} from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
    const signIn = e => {
        e.preventDefault();

        //firebase implementation goes here
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();

        //FIREBASE IMPLEMENTATION GOES HERE
    }
    return (
        <div className = 'login'>
            <Link to = '/'>
                <img className = "login_logo" src = "/images/Amazonlogo.png"/>
            </Link>

            <div className = 'login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type="password"  value = {password} onChange = {e => setPassword(e.target.value)}/>
                    <button type="submit" className = 'login-signInButton' onClick={signIn}>Sign in</button>

                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE Conditions of Use & Sale. Please see our Privacy NOtic, our Cookies Notice and our Interest-Based Adds
                </p>
                <button onClick = {register} className='login_registerButton'>Create your amazon account</button>
            </div>
        </div>
    )
}
