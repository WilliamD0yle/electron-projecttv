import { MOVIES_FETCH, CLEAR_STATE, TRAILER_FETCH } from '../Actions/types';

const INITIAL_STATE = {
  data: [],
  trailerId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_FETCH:
      return {data: [...state.data,...action.payload], trailerId: state.trailerId};
    case CLEAR_STATE:
      state = INITIAL_STATE;
      return state;
    case TRAILER_FETCH:
      return {trailerId: action.payload, data: state.data};
    default:
      return state;
  }
};
