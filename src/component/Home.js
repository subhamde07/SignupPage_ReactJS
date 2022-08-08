import React from "react";
import "./Home.css";
// import SignIn from "./SignIn";

const Home = () => {

  return (
    <>
      <div id="login-box">
        <div className="left">
          <h1>
            <b>Sign up</b>
          </h1>
          <input
            type="text"
            
            name="name"
            autocomplete="off"
            placeholder="Full Name*"
            required
          />
          <input
            type="text"
            
            name="email"
            autocomplete="off"
            placeholder="E-mail*"
            required
          />
          <input
            type="tel"
            
            name="phone"
            autocomplete="off"
            placeholder="Phone Number*"
            required
          />
          <input
            type="password"
            
            name="password"
            placeholder="Password*"
            required
          />
          <input type="confirm password"  name="cpassword" placeholder="Confirm Password*" required />
          <button type="submit" class="submit" name="submit">
            SUBMIT
          </button>
          Back to <a href="#">Signin</a> Page
        </div>
        {/* <SignIn /> */}

        <div class="right">
          <b>
            <span class="loginwith">
              Sign up with
              <br />
              social network
            </span>
          </b>

          <button className="social-signin facebook">
            Log in with facebook
          </button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
      </div>
    </>
  );
};

export default Home;
