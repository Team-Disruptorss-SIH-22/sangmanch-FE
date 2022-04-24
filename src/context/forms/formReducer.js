import { CLEAR_ERROR, FORM_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }

    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
