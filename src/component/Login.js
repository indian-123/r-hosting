import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState('');

// ------------------------------------------   API LOgin ---------------------------------//
const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/user/';
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        // alert(response.data);

        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
// ----------------------------------------- END USER ------------------------------------//
    const handleLogin = (e) => {
      e.preventDefault();
      const token = email;

    const gets = data.find(u => u.email ===email);
    setUserData(gets);
    if (gets && gets.password === password) {
        localStorage.setItem('token', token);
        window.location.href = '/';
    }
    else {
     
      alert('Invalid email or password.');
      
    }
    };
  
    return (
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  };
  export default Login;