
import React, { useState } from 'react';
import axios from 'axios';
function RegistrationForm() {
  const [username, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setuserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
// -------------------------------------------------------  API REGISTER ----------------------//
const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append('username', username);
  formData.append('email', email);
  formData.append('password',password);
    try {
      await axios.post('http://127.0.0.1:8000/user/', formData, {
        
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': getCookie('csrftoken'),
          // 'Content-Type': 'application/json',

        }
      });
      event.preventDefault();
     const users = JSON.parse(localStorage.getItem('users')) || [];
     users.push({ username, email, password });
     localStorage.setItem('users', JSON.stringify(users));
     setuserName('');
     setEmail('');
     setPassword('');
     alert("registed successfully !!!")
     window.location.reload();
     

    } catch (error) {
      alert("ALREADY YOUR USERNAME OR EMAIL ARE REGISTERD")
    }
  
  }
  //   event.preventDefault();
  //   const users = JSON.parse(localStorage.getItem('users')) || [];
  //   users.push({ username, email, password });
  //   localStorage.setItem('users', JSON.stringify(users));
  //   setName('');
  //   setEmail('');
  //   setPassword('');

  //   alert("save the data")
  //   window.location.reload();
  // };
  // ---------------------------------------
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={username} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Register</button>
    </form>
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

export default RegistrationForm;
