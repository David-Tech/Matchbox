import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/likes.css';

function Likes() {
  return (
      <div className="likes-body"> 
        <p>No Likes yet</p>
        <p><Link className="sign-color" to="/Matchbox/upload"> Upload</Link> a picture to get started!</p>
      </div>
  )
}

export default Likes