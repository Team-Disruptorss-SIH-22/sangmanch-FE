import {
  GET_EVENTS_OF_USER,
  GET_ALL_EVENTS,
  CREATE_EVENT,
  FORM_ERROR,
  CLEAR_ERROR,
  SET_LOADING,
  REVIEW_EVENT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };

    case GET_EVENTS_OF_USER:
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null
      };
    case CREATE_EVENT:
      console.log(state, action);
      return {
        ...state,
        events: [...state.events, action.payload],
        loading: false,
        error: null
      };
    case REVIEW_EVENT:
      console.log(state, action);
      return {
        ...state,
        loading: false,
        error: null
      };
    case FORM_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        loading: false
      };
    default:
      return state;
  }
};
