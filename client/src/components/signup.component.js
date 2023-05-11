import React, { Component, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './CSS/signup.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      verfiypwd: "",
      val: "", // added this line to initialize val in state
      showPassword: false,
      showVerifyPwd: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
/* Handle Change not neeeded due to html input tag "min" parameter
  handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      this.setState({ age: e.target.value });
    }
  };
*/
  handleSubmit(event) {
    event.preventDefault();
    const { age, fname, lname, email, password, verfiypwd } = this.state;
    console.log(age, fname, lname, email, password, verfiypwd);

    if (password !== verfiypwd) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    fetch("https://matchbox-dvq2.onrender.com/register", {
      method: "POST",
      crossDomain: true,

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        age: this.state.age,
        fname,
        lname,
        email,
        password,
        verfiypwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        window.location.href="Matchbox/login";
      });
  }

// show pwd
  toggleShowPassword = (input) => {
    this.setState((prevState) => ({
      [input]: !prevState[input],
    }));
  };

  render() {
    const { age, showPassword, showVerifyPwd } = this.state; 

    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div>
          <input
            type="number"
            className="form-control signup-input"
            value={age}
            min = "18"
            //onChange={this.handleChange}
            placeholder="Age (18 or older)"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control signup-input"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control signup-input"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

        <div>
          <input
            type="email"
            className="form-control signup-input"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control password-input signup-input"
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <FontAwesomeIcon 
            className="pwd-eye-icon"
            icon={showPassword ? faEye : faEyeSlash}
            onClick={() => this.toggleShowPassword("showPassword")}
          />
        </div>

        <div className="password-container">
          <input
            type={ showVerifyPwd ? "text" : "password"}
            className="form-control password-input signup-input"
            placeholder="Verify password"
            onChange={(e) => this.setState({ verfiypwd: e.target.value })}
          />
          <FontAwesomeIcon 
            className="pwd-eye-icon"
            icon={showVerifyPwd ? faEye : faEyeSlash}
            onClick={() => this.toggleShowPassword("showVerifyPwd")}
          />
        </div>

        <div className="signup-buttons">
          <button className ="back-button" >Back</button> 

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>
        <p className="account-msg">
          Already have an account?{" "}
          <Link className="sign-color" to="/login">Login</Link>
        </p>
      </form>
    );
  }
}
