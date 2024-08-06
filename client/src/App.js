import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Register from './pages/Register';
import Login from './pages/Login';
import Posts from './pages/Posts';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import PostsList from './components/PostsList'; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<PostsList />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/login" element={<Login />} />
          <Route
          path="/posts"
          element={
            <PrivateRoute>
              <Posts />
            </PrivateRoute>
          }
        />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
