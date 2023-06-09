import { combineReducers } from "redux";

import capteurReducer from './capteurReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';


const RootReducer = combineReducers({
  capteurReducer: capteurReducer,
  userReducer: userReducer,
authReducer:authReducer})

export default RootReducer;