import { AUTH, NOT_AUTH } from "../actions/types";

const initialState = {
  auth: false,
  isLoading: true,
  currentUser: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        auth: true,
        isLoading: false,
        currentUser: action.payload.user,
      };
    case NOT_AUTH:
      return { ...state, auth: false, isLoading: false };
    default:
      return state;
  }
}
