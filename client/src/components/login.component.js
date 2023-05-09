import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './CSS/login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false, // add a state property to keep track of password visibility
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);

    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./UserDetails";
        } else {
          alert("Username or Password Incorrect!");
        }
      });
  }

  // define a method to toggle the password visibility
  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { showPassword } = this.state; // get the current password visibility from state
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h3>Login</h3>

        <div>
          <input
            type="email"
            className="form-control login-input"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"} // use the showPassword state to toggle the password visibility
              className="form-control login-input"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <div className="input-group-append">
              {/* add an eye icon that toggles the password visibility */}
              <span
  
                className="pwd-eye-icon2"
                onClick={this.toggleShowPassword}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="">
            <input type="checkbox" className="check-input" />
            <label className="rmbr-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button className="log-back-btn">Back</button>

          <button type="submit">Submit</button>
        </div>

        <p className="forgot-pwd">
          Forgot <Link style={{ marginLeft: ".5rem" }} to="/">
            password?
          </Link>
        </p>
      </form>
    );
  }
}
