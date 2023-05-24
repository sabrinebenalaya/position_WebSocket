import axios from "axios";

//Add Capteur
export const addCapteur = (capteur) => async (dispatch) => {
  try {
    const capteuradded = await axios.post(
      "http://localhost:3001/capteurs/add",
      capteur
    );
    dispatch({ type: "ADD_CAPTEUR", payload: capteuradded.data });
  } catch (e) {
    console.log(e);
  }
};

//delete capteur
export const deleteCapteur = (id) => async (dispatch) => {
  try {
    const capteur = await axios.delete(
      `http://localhost:3001/capteurs/deleteCapteur/${id}`
    );
    const capteurs = await axios.get(
      "http://localhost:3001/capteurs/allCapteurs"
    );
    dispatch({ type: "DELETE_CAPTEUR", payload: capteurs.data });
  } catch (e) {
    console.log(e);
  }
};

//get capteur by id
export const getCapteurByID = (id) => async (dispatch) => {
  try {
    const capteur = await axios.get(
      `http://localhost:3001/capteurs/getCapteur/${id}`
    );
    dispatch({ type: "GET_CAPTEUR_By_ID", payload: capteur.data.capteur });
  } catch (e) {
    console.log(e);
  }
};

// get all capteur
export const fetchCapteurs = () => async (dispatch) => {
  try {
    const capteurs = await axios.get(
      "http://localhost:3001/capteurs/allCapteurs"
    );
    dispatch({ type: "GET_ALL_CAPTEUR", payload: capteurs.data });
  } catch (e) {
    console.log(e);
  }
};

//update capteur
//Add Capteur
export const updateCapteur = (capteur, id) => async (dispatch) => {
  try {
 

    const capteurUpdated = await axios.put(
      `http://localhost:3001/capteurs/update/${id}`,
      capteur
    );
   
    dispatch({ type: "UPDATE_CAPTEUR", payload: capteurUpdated.data });
  } catch (e) {
    console.log(e);
  }
};