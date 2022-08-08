import React from 'react'
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
    <div id="login-box">
        <div className="left">
          <h1><b>Sign In</b></h1>
          <input type="text" name="email" autocomplete="off"  placeholder="E-mail*" required />
          <input type="password" name="password" placeholder="password*" required />
          <button type="submit"  class="submit" name="submit">SUBMIT</button>
          {/* Back to <a href="#">Signup</a> Page */}
        </div>
        
        <div class="right">
          <b><span class="loginwith">Sign in with<br />social network</span></b>
          
          <button className="social-signin facebook">Log in with facebook</button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
      </div>
    </>
  )
}

export default SignIn