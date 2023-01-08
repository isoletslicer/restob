import { USER_LOGIN, USER_REGISTER } from "../actions/actionType";

const initialState = {
  user: [],
  loading: true,
  error: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.data,
        error: action.error,
        loading: action.loading,
      };
    case USER_REGISTER: {
      return {
        ...state,
        user: action.data,
        error: action.error,
        loading: action.loading,
      };
    }

    default:
      return state;
  }
}

export default userReducer;