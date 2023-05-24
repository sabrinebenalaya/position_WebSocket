
import { toast } from "react-toastify";
import axios from "axios"
//Add user
export const addUser =(user)=> async (dispatch) => {
    try {
        const useradded = await axios.post(
          "http://localhost:3001/users/add",
          user
        );
        dispatch({ type: "ADD_USER", payload: useradded.data });
       
      } catch (e) {
        console.log(e);
      }
};



//update user
export const updateUser = (newuser, id) => async (dispatch) => {
  try {
    const user = await axios.put(
      `http://localhost:3001/users/${id}`,
      newuser
    );

    dispatch({ type: "UPDATE_USER", payload: user.data });

    toast("User updated Successfully!");
  } catch (error) {
    console.log(error);
  }
};


//delete user
export const deleteUser =(userId)=> async (dispatch) => {
  try {
    const user = await axios.delete(
      `http://localhost:3001/users/deleteUser/${userId}`
    );

    dispatch({ type: "DELETE_USER", payload: user.data });
  } catch (e) {
    console.log(e);
  }
};

//get user by id
export const getUserByID = (id) => async (dispatch) => {
  try {
    const user = await axios.get(
      `http://localhost:3001/users/getUser/${id}`
    );

    dispatch({ type: "GET_USER_By_ID", payload: user.data });
  } catch (e) {
    console.log(e);
  }
};

// get all user
export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await axios.get("http://localhost:3001/users/allUsers");
console.log("users=", users.data)
    dispatch({ type: "GET_ALL_USER", payload: users.data });
  } catch (e) {
    console.log(e);
  }
};
