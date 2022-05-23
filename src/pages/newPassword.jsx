import React from 'react';
import '@styles/newPassword.scss';
import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
    return ( 
        <section class="new-password">
            <div class="form-container-password">
                {/* <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo"> */}
                <ImageComponent image={logo} imageAlt={'logo image'} class={'logo'}/>
                <h1 class="title">Create a new password</h1>
                <p class="sub-title">Enter a new password for your account</p>
                <form action="#" class="form-new-password">
                    <label for="passowrd" class="label">Password</label>
                    <input type="password" id="passowrd" class="input" placeholder="*******"/>
                    <label for="passowrd-confirmation" class="label">Re-enter password</label>
                    <input type="password" id="passowrd-confirmation" class="input input-password" placeholder="*******"/>
                    <input type="submit" value="Confirm new password" class="btn btn-primary"/>
                </form>
            </div>
        </section>
     );
}
 
export default NewPassword;