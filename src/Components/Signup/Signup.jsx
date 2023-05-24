import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../Login/Login.css'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="main1">
      <div className="child1">
<div className="proj"><img src="Frame 2.png" alt="logo"/></div>
<div className="wel">Hi, Welcome<br/> Back!</div>
<div className="pic"><img src="Group.svg" alt="picture"/></div>

      </div>

      <div className="child2">
        <div className="sign">Sign-In.</div>
        <div className="enter">
        Kindly enter your credentials below to<br/> get access to your account.
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
          <div className="gmi"> <img src="pasword.png"/>
         </div>
         
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
<div className="main0">
<div className="ch1">
<div className="ch">
<input
          type="checkbox"
          style={{"width":"18px","height": "18px"}}
        />
</div>
<div className="sho">Show pasword</div>
</div>
<div className="reset">Reset pasword?</div>
</div>
          

          
          <div className="but">
            <button type="submit">LOGIN</button>
          </div>
        </form><br/><br/>

        <div className="button">
        Don’t Have An Account Yet? <NavLink to="/signup">Sign-up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signin;
