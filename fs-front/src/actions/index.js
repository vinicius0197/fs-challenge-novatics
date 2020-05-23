import api from "../apis";
import { SEND_KUDO, SIGNUP } from "./types";

export const sendKudo = (formValues) => async (dispatch) => {
  const response = await api.post("/kudos", formValues);
  dispatch({ type: SEND_KUDO, payload: response.data });
};

export const signup = (formValues) => async (dispatch) => {
  const user = { user: formValues };
  const response = await api.post("/users", user);
  dispatch({ type: SIGNUP, payload: response.data });
};
