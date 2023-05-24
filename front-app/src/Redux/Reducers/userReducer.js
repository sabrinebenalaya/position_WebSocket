
  
  const initialState = { loading: false, users: [], user: {} };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USER_By_ID":
        return { ...state, loading: false, user: action.payload };
  
      case "ADD_USER":
        return { ...state, loading: false, user: action.payload };
  
      case "UPDATE_USER":
        return { ...state, loading: false, users: action.payload };
  
      case "DELETE_USER":
        return { ...state, loading: false, users: action.payload };
  
      case "GET_ALL_USER":
        console.log("red=", action.payload)
        return { ...state, loading: false, users: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  