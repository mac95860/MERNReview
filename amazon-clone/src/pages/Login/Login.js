import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className = 'login'>
            <Link to = '/'>
                <img className = "login_logo" src = "/images/Amazonlogo.png"/>
            </Link>

            <div className = 'login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    
                    <h5>Password</h5>
                    <input type="password" />
                    <button>Sign in</button>

                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE Conditions of Use & Sale. Please see our Privacy NOtic, our Cookies Notice and our Interest-Based Adds
                </p>
                <button>Create your amazon account</button>
            </div>
        </div>
    )
}
