import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload; KEY INTERPOLATION not an array
      // return { ...state };
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
