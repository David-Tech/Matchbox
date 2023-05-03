import React, { useState } from 'react';
import "../CSS/profile.css";

function Profile() {
  return (
    <>
      <div className="profile-body">
      <h3>Deal Breakers</h3>
        <ul className ="prompts-body">
          <li> What are your favorite hobbies?</li> 
          <input></input>
          <li>What is your favorite food or restaurant</li>
          <li></li>
        </ul>

      <h3>Interest</h3>
        <ul className ="prompts-body">
          <li>Are you looking for someone who wants kids in the future?</li>
          <li>How important is it to you that your partner has a certain level of education?</li>
          <li>Are there any political views that would be a deal breaker for you?</li>
        </ul>
      </div>


    </>
  );
}

export default Profile;
