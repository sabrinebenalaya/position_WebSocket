import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRoute: null,
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setSelectedRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
  },
});

export const { setSelectedRoute } = routeSlice.actions;

export default routeSlice.reducer;
