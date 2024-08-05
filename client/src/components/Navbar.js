import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <ul>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
