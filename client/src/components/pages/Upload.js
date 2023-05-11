import React, { useState } from "react";
import '../CSS/upload.css';


//import axios from "axios";

const Upload = () => {
  
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
/*
  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("location", location);

    axios
      .post("/api/photos/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
*/
  return (
    <div className="upload-body">
      <h1>Upload a Photo </h1>
      <form /*onSubmit={handleSubmit}>*/>
        <label>
          Select a photo:
          <input type="file" /*onChange={handlePhotoChange} *//>
        </label>
        <br />
        <label>
          Location:
          <input type="text" /*onChange={handleLocationChange} *//>
  
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );

};

export default Upload