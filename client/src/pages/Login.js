import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  
  const dispatch = useDispatch();

  const { email, password } = formData;
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/'); // Redirige a la página de inicio en caso de éxito
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <div className="login-container">
      <h1>Login</h1>
    <form className="login-form" onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onChange}
        required
      />
      <button type="submit">Login</button>
      {auth.error && <p className="error-message">{auth.error}</p>}
      <p className="signup-link">
          Not a member? <a href="/register">Sign up here</a>
        </p>
    </form>
    </div>
  );
};

export default Login;
