import { FETCH_BLOCKS_START, FETCH_BLOCKS_ERROR, RECEIVE_BLOCKS } from '../constants';

const initialState = {
  fetching: false,
  blocks: [],
  error: null,
  fetched: false,
};

export default function blocks(state = initialState, action) {
  if (action.type === FETCH_BLOCKS_START) {
    return {
      ...state,
      fetching: true,
    };
  }
  if (action.type === FETCH_BLOCKS_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  }
  if (action.type === RECEIVE_BLOCKS) {
    return {
      ...state,
      blocks: action.payload,
    };
  }

  return state;
}
