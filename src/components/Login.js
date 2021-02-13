import React from 'react';
import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';


function Login() {
    return (
        <div className='app'>
        <Header />
        <Navbar/>
        <div className="login">
            <div className="login__container">
            <form>
                <h5>E-mail</h5>
                <input className="email" type="text"  />
                <h5>Password</h5>
                <input type="password"/>
                <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login;
