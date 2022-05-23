import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@styles/passwordRecovery.scss';

const  PasswordRecovery = () => {
    const navigate = useNavigate();
    const submit = (e)=>{
        e.preventDefault();
        navigate('/send-email');
    }

    return ( 
        <section className="recovery-password">
            <div className="form-container-recovery">
                <h2 className="title">Password recovery</h2>
                <p className="sub-title">
                    Inform the email addres used to create your account
                </p>
                <form onSubmit={submit} action="#" className="recovery-password-form">
                    <label htmlFor="email">Email address

                    </label>
                    <input type="email"  placeholder="camilayokoo@gmail.com"/>
                    <input type="submit" className="btn btn-primary" value="submit"/>
                </form>
                <p className="back-to-login">
                    <Link to={'/login'}>Back to login</Link>
                </p>
            </div>
        </section>
     );
}
 
export default PasswordRecovery;