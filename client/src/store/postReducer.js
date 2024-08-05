const initialState = {
    posts: [],
    loading: true,
    error: null,
  };
  
  export default function postReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'CREATE_POST_SUCCESS':
        return {
          ...state,
          posts: [payload, ...state.posts],
          loading: false,
        };
      case 'CREATE_POST_FAIL':
        return {
          ...state,
          error: payload,
          loading: false,
        };
      // Agrega más casos según sea necesario
      default:
        return state;
    }
  }
  