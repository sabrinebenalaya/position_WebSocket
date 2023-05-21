import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import thunkMiddleware from 'redux-thunk';
import routeSlice from "./routeSlice";
import capteurSlice from "./CapteurSlice"

export default configureStore({
  reducer: {
    user: UserSlice,
    route: routeSlice,
    capteur: capteurSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunkMiddleware),
});
