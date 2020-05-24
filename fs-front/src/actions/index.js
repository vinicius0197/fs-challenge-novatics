import api from "../apis";
import {
  SEND_KUDO,
  SIGNUP,
  LOGIN,
  AUTH,
  NOT_AUTH,
  GET_USERS,
  NOT_ENOUGH_KUDOS,
} from "./types";

export const sendKudo = (formValues) => async (dispatch) => {
  const response = await api.post("/kudos", { kudo: formValues });
  if (response.data.success) {
    dispatch({ type: SEND_KUDO, payload: response.data });
  } else {
    dispatch({ type: NOT_ENOUGH_KUDOS, payload: response.data });
  }
};

export const signup = (formValues) => async (dispatch) => {
  const user = { user: formValues };
  const response = await api.post("/users", user);
  localStorage.setItem("token", response.data.jwt);
  dispatch({ type: SIGNUP, payload: response.data });
};

export const login = (formValues) => async (dispatch) => {
  const user = { user: formValues };
  const response = await api.post("/login", user);
  localStorage.setItem("token", response.data.jwt);
  dispatch({ type: LOGIN, payload: response.data });
};

export const isAuth = (token) => async (dispatch) => {
  if (token === null) {
    dispatch({ type: NOT_AUTH, payload: null });
  } else {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await api.get("/user_is_authed", config);
    if (response.status === 200) {
      dispatch({ type: AUTH, payload: response.data });
    } else {
      dispatch({ type: NOT_AUTH, payload: response.data });
    }
  }
};

export const getUsers = () => async (dispatch) => {
  const response = await api.get("/users");
  dispatch({ type: GET_USERS, payload: response.data });
};
