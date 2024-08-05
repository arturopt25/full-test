import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Register from './pages/Register';
import Login from './pages/Login';
import Posts from './pages/Posts';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/posts" component={Posts} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
