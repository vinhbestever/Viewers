import React, { useState } from 'react';
import './Register.css';
import MonaiLabelClient from '../../../../../monai-label/src/services/MonaiLabelClient';
// import { Link } from 'react-router-dom';
// import { useAppContext } from '../context/AppContext';

export default function Login() {
  //   const context = useAppContext();
  const client = new MonaiLabelClient('http://127.0.0.1:8000');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const handleInputUsername = event => {
    const { name, value } = event.target;

    setUsername(value);
  };

  const handleInputPassword = event => {
    const { name, value } = event.target;

    setPassword(value);
  };

  const handleInputEmail = event => {
    const { name, value } = event.target;

    setEmail(value);
  };
  const handleInputName = event => {
    const { name, value } = event.target;

    setName(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // Xử lý logic đăng nhập tại đây
    const response = await client.register(username, password, email, name);

    if (response.statusText === 'OK') {
      alert('Sign Up Success');
    } else {
      alert('Somthing wrong!!!');
    }
  };
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2>Register</h2>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleInputUsername}
        />
        <input
          className="password"
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputPassword}
        />
        <input
          className="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputEmail}
        />
        <input
          className="full_name"
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={name}
          onChange={handleInputName}
        />
        <button onClick={handleSubmit} className="button">
          Register
        </button>
        <a href="/ohif/login">Log in</a>
      </div>
    </div>
  );
}
