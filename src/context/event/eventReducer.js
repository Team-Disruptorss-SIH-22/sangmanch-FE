import { GET_EVENTS, CREATE_EVENT, FORM_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case CREATE_EVENT:
      console.log(state, action);
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case FORM_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
