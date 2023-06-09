
import { toast } from "react-toastify";
import axios from "axios"




//update user
export const updateUser = (newuser,  id, navigate) => async (dispatch) => {
  console.log("newuser", newuser)


  try {
    const user = await axios.put(
      `http://localhost:3001/users/updateUser/${id}`,
      newuser
    );

    dispatch({ type: "UPDATE_USER", payload: user.data });
if(user.status === 200){
  toast("User updated Successfully!");
  navigate("/admin/users")
}
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
console.log("d=", user.data.user)
    dispatch({ type: "GET_USER_By_ID", payload: user.data.user });
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
