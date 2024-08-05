import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <form onSubmit={onSubmit}>
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
    </form>
  );
};

export default Login;
