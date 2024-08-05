import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'REGISTER_FAIL', payload: err.response.data });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAIL', payload: err.response.data });
  }
};

export const createPost = (postData, token) => async (dispatch) => {
  try {
    const res = await axios.post('/api/posts', postData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: 'CREATE_POST_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'CREATE_POST_FAIL', payload: err.response.data });
  }
};

export const logout = () => async (dispatch) => {
    try {
      await axios.post('/api/auth/logout');
      
      localStorage.removeItem('token');
      
      dispatch({ type: 'LOGOUT' });
    } catch (err) {
        
      console.error("Error al hacer logout:", err);
    }
  };
