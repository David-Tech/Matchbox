import React, { Component, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './CSS/signup.css'

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      fname: "",
      lname: "",
      email: "",
      password: "",
      verfiypwd: "",
      val: "" // added this line to initialize val in state
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      this.setState({ val: e.target.value });
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    const { age, fname, lname, email, password, verfiypwd } = this.state;
    console.log(age, fname, lname, email, password, verfiypwd);

    fetch("http://localhost:3000/register", {
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
      });
  }
  
  render() {
    const { val } = this.state; // added this line to get val from state

    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div>
          <input
            type="number"
            className="form-control"
            value={val}
            onChange={this.handleChange} // corrected this line
            placeholder="Age (18 or older)"
            // onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

        <div>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control"
            placeholder="Verify password"
            onChange={(e) => this.setState({ verfiypwd: e.target.value })}
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
