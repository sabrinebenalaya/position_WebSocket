import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

//  fetchCapteur
export const fetchCapteurs = createAsyncThunk(
  "/admin/capteurs",
  async () => {
    try {
      const response = await axios.get("http://localhost:3001/capteurs/allCapteurs");
      console.log("res", response)
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

//delete capteur
export const deleteCapteur = createAsyncThunk(
  "/admin/capteurs/deleteCapteur",
  async (capteurId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/capteurs/deleteCapteur/${capteurId}`
      );
      return response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

//get capteur by ID
export const getCapteurByID = createAsyncThunk("/admin/capteurs/getCapteurByID", async (capteurId) => {
  try {
    const response = await axios.get(`http://localhost:3001/capteurs/getCapteur/${capteurId}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
});


const capteurSlice = createSlice({
  name: "capteur",
  initialState: [],
  reducers: {
    addCapteur: async (state, action) => {
      try {
        const capteur = await axios.post(
          "http://localhost:3001/capteurs/add",
          action.payload
        );
        if (capteur.status === 200) {
          toast(capteur.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
   
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCapteurs.fulfilled, (state, action) => {
      // Traitement des données de l'action lorsque la requête réussit
      return action.payload;
    });
    builder.addCase(fetchCapteurs.rejected, (state, action) => {
      // Traitement des erreurs de la requête
      console.log(action.error.message);
    });

    builder.addCase(deleteCapteur.fulfilled, (state, action) => {
      // Supprimer l'utilisateur de l'état
      const capteurId = action.payload;
      return state.filter((capteur) => capteurId._id !== capteurId);
    });
    builder.addCase(deleteCapteur.rejected, (state, action) => {
      // Traitement des erreurs lors de la suppression de l'utilisateur
      console.log(action.error.message);
    });
    
    builder.addCase(getCapteurByID.fulfilled, (state, action) => {
      // Mettre à jour l'utilisateur dans l'état
      const capteur = action.payload;
      const index = state.findIndex((c) => c._id === capteur._id);
      if (index !== -1) {
        state[index] = capteur;
      } else {
        state.push(capteur);
      }
    });
    builder.addCase(getCapteurByID.rejected, (state, action) => {
      // Traitement des erreurs lors de la récupération de l'utilisateur
      console.log(action.error.message);
    });
  },
});

export const { addCapteur } = capteurSlice.actions;

export default capteurSlice.reducer;
