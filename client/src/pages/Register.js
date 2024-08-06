import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import './Register.scss'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/'); // Redirige a la página de inicio en caso de éxito
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <div className="register-container">
    <h1>Register</h1>
    <form onSubmit={onSubmit}>
      <input
        type="name"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
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
      <button type="submit">Register</button>
      <p className="login-link">
          Already a member? <a href="/login">Log in here</a>
      </p>
    </form>
    </div>
  );
};

export default Register;
