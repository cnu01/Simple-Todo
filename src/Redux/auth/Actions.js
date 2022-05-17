import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS } from "./ActionTypes";

const loginReq = () => ({
  type: LOGIN_REQ
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

const loginFailure = () => ({
  type: LOGIN_FAILURE
});

const getLoginData = ({ email, password }) => (dispatch) => {
  dispatch(loginReq());
  axios
    .post("https://reqres.in/api/login", {
      email,
      password
    })
    .then((res) => dispatch(loginSuccess(res.data.token)))
    .catch(() => dispatch(loginFailure()));
};

export { loginFailure, loginReq, loginSuccess, getLoginData };
