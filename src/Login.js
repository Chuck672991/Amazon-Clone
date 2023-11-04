import React from "react";
import { Link,useNavigate} from "react-router-dom"; //usenavigate se listen to login or push in to data alyer ma hoga takey home page pr lejaaskey
import { auth } from "./firebase";
import "./Login.css";
import { useState } from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const handleClick = (e) => {
    
    e.preventDefault(); //to stops refreshing
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //login succesfully,or home page pr lejao
        navigate("/");//ye yaad rkhney ma madad dega browser ko k user ne details wagera nh dali ha abhi sahi se

      })
      .catch((e) => alert(e.message)); //if any error stuff happends
  };
  const register = (e) => {
    e.preventDefault(); //to stops refreshing
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
      //created a user and logged in
      navigate.push("/")//ye yaad rkhney ma madad dega browser ko k user ne details wagera nh dali ha abhi sahi se

    }).catch((e) => alert(e.message));

  };
  return (
    <div className="login_section">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
          alt="amazon Logo"
          className="login_img"
        />
      </Link>

      <form className="login_content">
        <div className="login_email">
          <h4 className="login_title">Sign in</h4>
          <h6>Enter Mobile and phone number</h6>
          <input
            className="email_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          ></input>
        </div>
        <div className="login_password">
          <h6>Password</h6>
          <input
            className="email_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>
        </div>
        <button
          className="login_button btn btn-warning"
          onClick={handleClick}
          type="submit"
        >
          Login
        </button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <div className="registration">
          <small>New to amazon?</small>
          <small>You can Create a free little account by Clicking here</small>

          <small>
            {" "}
            <button
              type="button"
              style={{ marginTop: "2px" }}
              class="btn btn-secondary"
              onClick={register}
            >
              Create Your Free Account
            </button>
          </small>
        </div>
      </form>
    </div>
  );
}

export default Login;
