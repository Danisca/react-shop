import React from 'react';
import ImageComponent from '@components/ImageComponent';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import '@styles/send-email.scss';
const SendEmail = ()=> {
    return (
        <section className="send-email">
            <div className="form-container-email">
                <ImageComponent image={logo} imageAlt={'logo'} className={'logo'}/>
                <h1 className="title">Email has been sent!</h1>
                <p className="sub-title">Please check your inbox to recive instructions on how to reset your password</p>
                <div className="email-image">
                    <ImageComponent image={email} imageAlt={'email icon'}/>
                </div>
                <button className="btn btn-primary">Login</button>
                <p className="resend-email">
                    <span>Din't recive the email?</span>
                    {/* TODO: PROGRAM RESEND FEATURE */}
                    <a href="#">Resend</a>
                </p>
            </div>
        </section>
    );
}
export default SendEmail;