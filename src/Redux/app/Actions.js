import {
  INC_COUNTER,
  DEC_COUNTER,
  ADD_TODO_REQ,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO
} from "./ActionTypes";

// action returns an object=>
// type of action
// payload
// {
//   type:,
//   payload
// }

const incCounter = (payload) => ({
  type: INC_COUNTER,
  payload
});

const decCounter = (payload) => ({
  type: DEC_COUNTER,
  payload
});

export const addTodoReq = () => ({
  type: ADD_TODO_REQ
});

export const addTodoSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload
});
export const addTodoFailure = (message) => ({
  type: ADD_TODO_FAILURE,
  payload: message
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export { incCounter, decCounter };
