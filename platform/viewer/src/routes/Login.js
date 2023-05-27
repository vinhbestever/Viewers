import React, { useState } from 'react';
import './Login.css';
import MonaiLabelClient from '../../../../../monai-label/src/services/MonaiLabelClient';
// import { Link } from 'react-router-dom';
// import { useAppContext } from '../context/AppContext';

export default function Login() {
  //   const context = useAppContext();
  const client = new MonaiLabelClient('http://127.0.0.1:8000');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleInputUsername = event => {
    const { name, value } = event.target;

    setUsername(value);
  };

  const handleInputPassword = event => {
    const { name, value } = event.target;

    setPassword(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    // Xử lý logic đăng nhập tại đây
    const response = await client.login(username, password);

    if (response.statusText === 'OK') {
      window.location.href = window.location.origin + '/ohif/';
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
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
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleInputPassword}
      />
      <button onClick={handleSubmit} className="button">
        Login
      </button>
    </div>
  );
}
