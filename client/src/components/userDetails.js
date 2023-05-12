import React, { Component } from "react";
import './CSS/userDetails.css'
import Axios from "axios"; 
export default class UserDetails extends Component {
    

constructor(props){
    super(props);
    this.state = {
        listOfUsers: [],
        fname: "",
        lname: "",
        age: 0,
    };
}
componentDidMount(){
    const headers = {"Content-Type": "application/json"};
    Axios.get("https://matchbox-dvq2.onrender.com/getUsers", headers ).then((response) =>{ // use Axios to fetch data from backend
        this.setState({listOfUsers: response.data});
    });
    /*
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
    */
}

logOut=()=>{
    window.localStorage.clear();
    window.location.reload();
}


render() {
    const { listOfUsers, fname, age, lname } = this.state;

   /* const removeElement = (index) => { // working on a button to remove a user from the list
        console.log(index);
        const newList = listOfUsers.filter((user) => user !== index);
        this.setState({listOfUsers: newList});
      };

    */
    return (
        <div className="body-home">
            {/* Name<h1>{this.state.userData.fname}</h1>
            Email<h1>{this.state.userData.email}</h1>  */}

            <h1>
                You have {listOfUsers.length} matches! 
            </h1>

            {/* for user matches */}
            <div className="match-feed">
                <ul>
                {listOfUsers.map((user, index) => ( // map through the list of users and display them
                    <div className="match" key={index}> 
                        <div className="square"></div>
                        <div className="matchText"> 
                            First Name: {user.fname }<br />
                            Last Name: {user.lname}<br />  
                            Age: {user.age} 
                        </div>
                    </div>
                 ))}
                </ul>
            </div>
    

            <br />
            <button onClick={this.logOut} >Log Out</button>

        </div>
    );
}
};
