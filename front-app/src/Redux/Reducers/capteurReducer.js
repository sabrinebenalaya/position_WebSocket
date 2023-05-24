
  
  const initialState = { loading: false, capteurs: [], capteur: {} };
  
  const capteurReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CAPTEUR_By_ID":
        return { ...state, loading: false, capteur: action.payload };
  
      case "ADD_CAPTEUR":
        return { ...state, loading: false, capteurs: action.payload };
  
      case "UPDATE_CAPTEUR":
        return { ...state, loading: false, capteur: action.payload };
  
      case "DELETE_CAPTEUR":
        return { ...state, loading: false, capteurs: action.payload };
  
      case "GET_ALL_CAPTEUR":
        return { ...state, loading: false, capteurs: action.payload };
      default:
        return state;
    }
  };
  
  export default capteurReducer;
  