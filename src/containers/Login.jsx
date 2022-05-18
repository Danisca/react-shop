import React from 'react';
import '../styles/login.scss';

const Login = ()=>{
    return (
        <section className="login">
            <div className="form-container">
                <form action="#" className="form">
                    <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                    <label className="label">
                        Email:
                        <input type="email" id="email" className="input" placeholder="user@mail.com"/>
                    </label>
                    <label className="label">Password:
                    <input type="password" id="passowrd" className="input input-password" placeholder="*******"/>
                    </label>
                    <input type="submit" value="Log in" className="btn btn-primary"/>
                </form>
                <p className="forgot-my-password">
                    <a href="#">Forgot my password</a>
                </p>
                <button className="btn btn-secondary">Sign up</button>
            </div>
        </section>
    );
}

export default Login;