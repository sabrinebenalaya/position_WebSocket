import { combineReducers } from "redux";

import capteurReducer from './capteurReducer';
import userReducer from './userReducer';


const RootReducer = combineReducers({
  capteurReducer: capteurReducer,
  userReducer: userReducer,})

export default RootReducer;