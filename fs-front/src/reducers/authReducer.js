import { AUTH } from "../actions/types";

const initialState = {
  auth: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH:
      return { ...state, auth: true };
    default:
      return state;
  }
}
