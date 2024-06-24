import React, { useState } from 'react';
import './../styles/login.css';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        if (username === 'Admin' && password === '12345') {
            setMessage('Вы вошли в систему');
            onLogin();
        } else {
            setMessage('Имя пользователя или пароль введены неверно');
        }

        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-form-container">
            <h1 className="login-form-title">Данные пользователя</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
            />
            <br />
            <button onClick={handleLogin} className="login-button">
                Войти
            </button>
            <p className="login-message">{message}</p>
        </div>
    );
};

export default LoginForm;
