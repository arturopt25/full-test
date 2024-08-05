const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'REGISTER_SUCCESS':
      case 'LOGIN_SUCCESS':
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          token: payload.token,
          isAuthenticated: true,
          user: payload.user,
          loading: false,
        };
      case 'REGISTER_FAIL':
      case 'LOGIN_FAIL':
      case 'LOGOUT':
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          user: null,
          loading: false,
          error: payload,
        };
      default:
        return state;
    }
  }
  