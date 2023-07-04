import React, { useState } from 'react';
import { message } from 'antd';

import axios from 'axios';
import './AboutPage'
import './HouseReggister.css'
import { yellow } from '@mui/material/colors';
function Example() {
  const [messageApi, contextHolder] = message.useMessage();



  const [price, setPrice] = useState('');
  const [sf, setSf] = useState('');
  const [location, setLocation] = useState(''); 
  const [bhk, setBhk] = useState('');
  const [furn_status, setFurn_status] = useState('');
  const [age_of_prop, setAge_of_prop] = useState('');
  const [ty_of_prop, setTy_of_prop] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleSfChange = (event) => {
    setSf(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleBhkChange = (event) => {
    setBhk(event.target.value);
  };
  const handleFurn_statusChange = (event) => {
    setFurn_status(event.target.value);
  };
  const handleAge_of_propChange = (event) => {
    setAge_of_prop(event.target.value);
  };
  const handleTy_of_prop = (event) => {
    setTy_of_prop(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('price', price);
    formData.append('sf', sf);
    formData.append('location', location);
    formData.append('bhk', bhk);
    formData.append('furn_status', furn_status);
    formData.append('age_of_prop', age_of_prop);
    formData.append('ty_of_prop', ty_of_prop);
    formData.append('gender', gender);
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:8000/house/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': getCookie('csrftoken'),
          // 'Content-Type': 'application/json',

        }
        
      });
      // alert("HOUSE REGISTERED SUCCESSFULLY")
      messageApi.open({
        type: 'success',
        content: 'YOUR HOUSE REGISTERED SUCCESSFULLY!!!',
        duration: 3,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='body' style={{backgroundColor:'black'}}>
      {contextHolder}
<form onSubmit={handleSubmit}>
  <label for="name">price:</label>
  <input type="text" id="name" name="name" value={price} onChange={handlePriceChange} /><br/>
  <label for="name">sf:</label>
  <input type="text" id="name" name="name" value={sf} onChange={handleSfChange}/><br/>
  <label for="name">location:</label>
  <input type="text" id="name" name="name" value={location} onChange={handleLocationChange}/><br/>
  <label for="name">bhk:</label>
  <input type="text" id="name" name="name" value={bhk} onChange={handleBhkChange} /><br/>
  <label for="name">furn_status:</label>
  <input type="text" id="name" name="name" value={furn_status} onChange={handleFurn_statusChange}/><br/>
  <label for="name">age_of_prop:</label>
  <input type="text" id="name" name="name" value={age_of_prop} onChange={handleAge_of_propChange}/><br/>
  <label for="name">ty_of_prop:</label>
  <input type="text" id="name" name="name" value={ty_of_prop} onChange={handleTy_of_prop}/><br/>
  <label for="name">gender:</label>
  <input type="text" id="name" name="name" value={gender} onChange={handleGenderChange}/><br/>
  <label for="name">image:</label>
  <input id="file-input" type="file" onChange={handleFileChange} />
  
  <input type="submit" value="Submit" />
</form>

</div>
  );
}
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
export default Example;