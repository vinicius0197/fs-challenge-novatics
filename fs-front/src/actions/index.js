import api from "apis";
import { SEND_KUDO } from "./types";

export const sendKudo = (formValues) => async (dispatch) => {
  const response = await api.post("/kudos", formValues);
  dispatch({ type: SEND_KUDO, payload: response.data });
};
