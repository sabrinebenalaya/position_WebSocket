import axios from "axios";
import { toast } from "react-toastify";
import { isEmpty } from "../../Validator/isEmpty";
import { isAuth } from "./../../Middleware/isAuth";
import { validatorLogin } from "../../Validator/validatorLogin";

//log in
export const logIn = (userInfo, navigate) => async (dispatch) => {
  const { errors, isValid } = validatorLogin(userInfo);
  try {
    if (!isValid) {
      if (!isEmpty(errors.mail)) {
        toast.error(errors.mail);
      }
      if (!isEmpty(errors.password)) {
        toast.error(errors.password);
      }
    } else {
      const res = await axios.post(
        "http://localhost:3001/auth/login",
        userInfo
      );
      const { token, user } = res.data;
      localStorage.setItem("jwt", token);
      dispatch({ type: "LOGIN_SUCCESS", payload: { token, user } });
      if (res.status === 200) {
        isAuth(token);
        navigate("/admin");
        toast("Successfully loged!");
      }
    }
  } catch (error) {
    if (error.response) {
      error.response.status === 401 &&
        toast.error(error.response.data.password);
      error.response.status === 400 && toast.error(error.response.data.mail);
    } else {
      console.log(error.message);
    }
  }
};

//Add user
export const addUser = (user) => async (dispatch) => {
  console.log("user", user);
  try {
    const useradded = await axios.post(
      "http://localhost:3001/auth/addUser",
      user
    );

    if (useradded.status === 200) {
      dispatch({ type: "ADD_USER", payload: useradded.data });
      toast("User added");
    }
  } catch (error) {
    if (error.response) {
      error.response.status === 400 && toast.error(error.response.data.msg);
    } else {
      console.log(error);
    }
  }
};

// log out
export const logOut = (navigate) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/auth/logOut");
    console.log("res=", res);
    dispatch({
      type: "LOGOUT",
      payload: {},
    });
    if (res.status === 200) {
      localStorage.removeItem("jwt");

      navigate("/");
      toast(res.data.errors);
    }
  } catch (e) {
    console.log(e);
  }
};
