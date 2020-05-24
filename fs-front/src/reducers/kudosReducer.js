import {
  SEND_KUDO,
  NOT_ENOUGH_KUDOS,
  GET_REMAINING_KUDOS,
  GET_KUDOS,
} from "../actions/types";

const initialState = {
  grateful_kudos: 0,
  awesome_kudos: 0,
  learned_kudos: 0,
  kudos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REMAINING_KUDOS:
      return {
        ...state,
        grateful_kudos: action.payload.kudos.grateful_kudo,
        awesome_kudos: action.payload.kudos.awesome_kudo,
        learned_kudos: action.payload.kudos.learned_kudo,
      };
    case SEND_KUDO:
      return {
        ...state,
        grateful_kudos: action.payload.kudos.grateful_kudo,
        awesome_kudos: action.payload.kudos.awesome_kudo,
        learned_kudos: action.payload.kudos.learned_kudo,
      };
    case NOT_ENOUGH_KUDOS:
      alert("Not enough kudos");
      return { ...state };
    case GET_KUDOS:
      return {
        ...state,
        kudos: action.payload.kudos,
      };
    default:
      return state;
  }
}
