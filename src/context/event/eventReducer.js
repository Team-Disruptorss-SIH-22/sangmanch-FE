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
      return {
        ...state,
        events: [...state.events, action.payload],
        loading: false,
        error: null
      };
    case REVIEW_EVENT:
      return {
        ...state,
        loading: false,
        events: state.events.map((event) =>
          event._id === action.payload._id ? action.payload : event
        ),
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
