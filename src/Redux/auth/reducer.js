

import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS } from "./ActionTypes";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: ""
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        isAuth: false,
        token: ""
      };
    default:
      return state;
  }
};
export default reducer;
