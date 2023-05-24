import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Login.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="main1">
      <div className="child1">
<div className="proj"><img src="Frame 2.png" alt="logo"/></div>
<div className="tex">Hi, Welcome to<br/> Projex!</div>
<div className="pic"><img src="fir.svg" alt="picture"/></div>

      </div>

      <div className="child2">
        <div className="sign">Sign-up.</div>
        <div className="enter">
          Kindly enter your credentials below to<br /> get access to your
          account.
        </div>
        <form onSubmit={handleSubmit}>
            <label className="emi">Email*</label><br/>
            <div className="gmi"> <img src="email.png"/>
         </div>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          


          <br/>
          <label className="pas">Pasword*</label><br/>
          <div className="gmi"> <img src="email.png"/>
         </div>
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>

          <label className="con">Confirm Password*</label><br/>
          <div className="gmi"> <img src="pasword.png"/>
         </div>
          
          <input
            type="password"
            placeholder="Confirm pasword"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <div className="but">
            <button type="submit">CREATE ACCOUNT</button>
          </div>
        </form><br/><br/>

        <div className="button">
        Already Have An Account? <NavLink to="/signin">LOGIN</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
