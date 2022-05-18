import React from 'react';
import '../styles/send-email.scss';
const SendEmail = ()=> {
    return (
        <section className="send-email">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <h1 className="title">Email has been sent!</h1>
                <p className="sub-title">Please check your inbox to recive instructions on how to reset your password</p>
                <div className="email-image">
                    <img src="./icons/email.svg" alt="email"/>
                </div>
                <button className="btn btn-primary">Login</button>
                <p className="resend-email">
                    <span>Din't recive the email?</span>
                    <a href="#">Resend</a>
                </p>
            </div>
        </section>
    );
}
export default SendEmail;