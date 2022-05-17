import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQ,
  ADD_TODO_SUCCESS,
  DEC_COUNTER,
  DELETE_TODO,
  INC_COUNTER
} from "./ActionTypes";

const initState = {
  count: 0,
  todos: [],
  loading: false,
  isErr: false
};

const reducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case INC_COUNTER:
      return {
        ...state,
        count: state.count + action.payload
      };
    case DEC_COUNTER:
      return {
        ...state,
        count: state.count - action.payload
      };

    case ADD_TODO_REQ:
      return {
        ...state,
        loading: true
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false
      };

    case ADD_TODO_FAILURE:
      return {
        ...state,
        isErr: true,
        loading: false
      };

    case DELETE_TODO:
      const newData = state.todos.filter((todo) => todo.id != action.payload);
      return {
        ...state,
        todos: newData
      };
    default:
      return state;
  }
};
export default reducer;
// inc counter
// dec counter
// add prodct
// delect prodct
// edit
//
