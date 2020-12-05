import React, {useState} from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created new user
                console.log(auth);
                if(auth) {
                    history.push('/');
                }
            })
            .catch(error => {
                alert(error.message)
            });
    }

    const signIn = e => {
        e.preventDefault();
      auth  
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
           if(auth){
               history.push('/');
           }
        })
        .catch(error => {
            alert(error.message);
        })
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
