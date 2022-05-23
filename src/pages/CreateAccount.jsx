import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
    return ( 
        <section className="create-account">
            <div  className="form-container-signup">
                <h2 className="signup-title">My account</h2>
                <form action="" className="signup-form">
                    <label htmlFor='name' className="label">Name
                        <input className="input" type="text" placeholder="Camila Yokoo" name="name" id="name"/>
                    </label>
                    <label htmlFor="email" className="label">Email address</label>
                    <input className="input" type="email" placeholder="camilayokoo@gmail.com" name="email" id="email"/>
                    <label htmlFor="password" className="label">Password</label>
                    <input className="input" type="password" name="password" id="password" placeholder="********"/> 
                <input type="submit" value="Create" className="btn btn-primary"/>
                </form>
            </div>
        </section>
     );
}
 
export default CreateAccount;