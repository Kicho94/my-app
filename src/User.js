import React from 'react'
import  './style.css'
const User = () =>{
    return (
        <React.Fragment>
            <div id="login-container">
    <div class="main-box">
        <form >
            <p class="input-holder">
             <label class="field-label">E-mail</label>
             <input type="text" class="text-field"/>
            </p>   
            <p class="input-holder">
                 <label class="field-label">Password</label>
                 <input type="text" class="text-field"/>
            </p> 
            <button class="main-button login-button">SIGN IN</button> 
        </form>
       <div class="onboarding-description">
           <p>Or if u don't have an account, <a href="#" class="onboarding-description">Register</a>.</p>
       </div>
    </div>

</div>
        </React.Fragment>
    )
}

export default User