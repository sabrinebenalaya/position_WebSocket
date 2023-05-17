import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import thunkMiddleware from 'redux-thunk';
import routeSlice from "./routeSlice";

export default configureStore({
  reducer: {
    user: UserSlice,
    route: routeSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunkMiddleware),
});
