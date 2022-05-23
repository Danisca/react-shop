import React from 'react';
import '@styles/login.scss';
import ImageComponent from '@components/ImageComponent';
import menuLogo from '@logos/logo_yard_sale.svg';

const Login = ()=>{
    return (
        <section className="login">
            <div className="form-container-login">
                <form action="#" className="form-login">
                    {/* <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/> */}
                    <label className="label" htmlFor='email'>Email:</label>
                    <input type="email" id="email" className="input" placeholder="user@mail.com"/>
                    <label className="label" htmlFor='password'>Password:</label>
                    <input type="password" id="passowrd" className="input input-password" placeholder="*******"/>
                    <input type="submit" value="Log in" className="btn btn-primary"/>
                </form>
                <p className="forgot-my-password">
                    {/* TODO: Add a react-router here */}
                    <a href="#">Forgot my password</a>
                </p>
                <button className="btn btn-secondary">Sign up</button>
            </div>
        </section>
    );
}

export default Login;