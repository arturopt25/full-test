import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;


  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Create Post</Link></li>
        {isAuthenticated ? (
          <>
            <li><span>Welcome, {user ? user.name : 'User'}</span></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
