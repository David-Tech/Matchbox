import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './CSS/login.css'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      email: "",
      password: "",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{email, password } = this.state;
    console.log(email, password);

    fetch("https://matchbox-dvq2.onrender.com/login-user",{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        email,
        password,
      }),
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data, "userRegister");
    if(data.status=="ok"){
      alert("login successful");
    window.localStorage.setItem("token", data.data);
    window.localStorage.setItem("loggedIn", true);
    window.location.href="./UserDetails";
    }
    else{
      alert("Username or Password Incorrect!")
    }
  })
  }
  render() {
    return (
      <form className = "login-form" onSubmit={this.handleSubmit}>
        <h3>Login</h3>

        <div>
          {/* <label>Email address</label> */}
          <input
            type="email"
            className="form-control login-input"
            placeholder="Enter email"
            onChange={e=>this.setState({email:e.target.value})}
          />
        </div>

        <div>
          {/* <label>Password</label> */}
          <input
            type="password"
            className="form-control login-input"
            placeholder="Enter password"
            onChange={e=>this.setState({password:e.target.value})}
          />
        </div>

        <div>
          <div className="">
            <input
              type="checkbox"
              className="check-input"
            />
            <label className="rmbr-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button className ="log-back-btn" >Back</button>

          <button type="submit">Submit</button>

        </div>
        {/* <a href="#"> password?</a> */}
        <p className="forgot-pwd"> Forgot <Link style={{ marginLeft: '.5rem' }}to="/"> password?</Link>
        </p>
      </form>
    )
  }
}
