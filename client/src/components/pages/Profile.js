import React, { useState } from 'react';
import "../CSS/profile.css";
function Profile() {
  return (
    <>
      <div className="profile-body">
        <h3>Interest</h3>
          <ul className ="prompts-body">
            <li> What are your favorite hobbies? <input className="input-color input-field" placeholder="e.g: video games, reading, etc"></input></li> 
        
            <li>What is your favorite food or restaurant <input className="input-color input-field"></input></li>
            <li></li>
          </ul>

        <h3>Dealbreakers</h3>
          <ul className ="prompts-body">
            <li>
              Are you looking for someone who wants kids in the future?      
              <label>
                <input type="radio" name="kids" value="yes"/>Yes
              </label>
              <label>
                <input type="radio" name="kids" value="no"/>No
              </label>
            </li>
            <li>
              How important is it to you that your partner has a certain level of education?  
              <input className="input-color input-field"></input>
            </li>
            <li>Are there any political views that would be a deal breaker for you? <input className="input-color input-field"></input></li>
          </ul>
      </div>
    </>
  );
}


export default Profile;
