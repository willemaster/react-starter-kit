import { FETCH_BLOCKS_START, FETCH_BLOCKS_ERROR, RECEIVE_BLOCKS } from '../constants';

const initialState = {
  fetching: false,
  blocks: [],
  error: null,
  fetched: false,
};

export default function blocks(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOCKS_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_BLOCKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RECEIVE_BLOCKS:
      return {
        ...state,
        blocks: action.payload,
        fetching: false,
      };
    default:
      return state;
  }
}
