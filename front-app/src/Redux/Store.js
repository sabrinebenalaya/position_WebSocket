import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import thunkMiddleware from 'redux-thunk';

export default configureStore({
  reducer: {
    user: UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunkMiddleware),
});
