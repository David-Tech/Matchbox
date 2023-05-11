import React, { Component } from "react";
import './CSS/userDetails.css'

export default class UserDetails extends Component {
constructor(props){
    super(props);
    this.state = {
        userData: "",
    };
}
componentDidMount(){
    fetch("https://matchbox-dvq2.onrender.com/userData",{
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type":"application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            token: window.localStorage.getItem("token"),
        }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data, "userData");
      this.setState({userData: data.data});
    })
}

logOut=()=>{
    window.localStorage.clear();
    window.location.reload();
}


render() {
    return (
        <div className="body-home">
            {/* Name<h1>{this.state.userData.fname}</h1>
            Email<h1>{this.state.userData.email}</h1>  */}
            <div>
                There are 0 matches. 
            </div>

            {/* for user matches */}
            <div className="match-feed">
                <div className="match1">
                    Name<h1>{this.state.userData.fname}</h1>
                    
                    Email<h1>{this.state.userData.email}</h1> 
                </div>
                <div className="match2"></div>
            </div>
    

            <br />
            <button onClick={this.logOut} >Log Out</button>

        </div>
    );
}
}
