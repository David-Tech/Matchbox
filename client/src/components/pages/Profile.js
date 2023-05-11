import React, { useState } from 'react';
import "../CSS/profile.css";

function Profile() {
  return (
    <>
      <div className="profile-body">
        <h3>Interests</h3>
          <ul className ="prompts-body">
            <li className="input-border"> 
              What is/are your favorite hobby or hobbies? 
              <input className="input-color input-field input-tag" placeholder="e.g: video games, reading, etc"></input>
            </li> 
  
            <li className="input-border">
              What is your favorite food or restaurant? 
              <input className="input-color input-field input-tag " placeholder= "e.g: Indian, Chick-Fil-a, etc "></input>
            </li>

            <li className="input-border">
              What gender are you attracted to?      
              <label className="radio">
                <input type="radio" name="attract" value="Male"/>Male
              </label>
              <label>
                <input type="radio" name="attract" value="Female"/>Female
              </label>
              <label>
                <input type="radio" name="attract" value="Nonbinary"/>Nonbinary
              </label>
              <label>
                <input type="radio" name="attract" value="Other"/>Other
              </label>
            </li>
          </ul>

        <h3>Dealbreakers</h3>
          <ul className ="prompts-body">
            <li className="input-border">
              Are you looking for someone who wants kids in the future?      
              <label className="radio">
                <input type="radio" name="kids" value="yes"/>Yes
              </label>
              <label>
                <input type="radio" name="kids" value="no"/>No
              </label>
            </li>
            <li className="input-border">
              How important is it to you that your partner has a certain level of education?  
              <label>
                <input type="radio" name="education" value="important"/> Important
              </label>
              <label>
                <input type="radio" name="education" value="neutral"/> Neutral
              </label>
              <label>
                <input type="radio" name="education" value="not important"/> Not important
              </label>
            </li>

            <li className="input-border">
              Are there any political views that would be a deal breaker for you? 
              <input className="input-color input-field input-tag"  placeholder= "e.g: Democratic, Republican, etc "></input>
            </li>
          </ul>
      </div>
    </>
  );
}


export default Profile;
