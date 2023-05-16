import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// Création de l'action asynchrone fetchUsers
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    try {
      const response = await axios.get("http://localhost:3001/users/allUsers");
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);


export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/users/deleteUser/${userId}`
      );
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: async (state, action) => {
      // Code pour ajouter un utilisateur
      try {
        const user = await axios.post(
          "http://localhost:3001/users/add",
          action.payload
        );
        if (user.status === 200) {
          toast(user.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    // Autres reducers
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // Traitement des données de l'action lorsque la requête réussit
      return action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      // Traitement des erreurs de la requête
      console.log(action.error.message);
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      // Supprimer l'utilisateur de l'état
      const userId = action.payload;
      return state.filter((user) => user.id !== userId);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      // Traitement des erreurs lors de la suppression de l'utilisateur
      console.log(action.error.message);
    });
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
