import { FETCH_PICTURES_START, FETCH_PICTURES_ERROR, RECEIVE_PICTURES, SET_SELECTED_ACCOUNT_COMPLETE } from '../constants';

const initialState = {
  fetching: false,
  pictures: [],
  error: null,
  fetched: false,
  selectedAccountHash: '',
};

export default function blocks(state = initialState, action) {
  switch (action.type) {
    case FETCH_PICTURES_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_PICTURES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RECEIVE_PICTURES:
      return {
        ...state,
        pictures: action.payload,
        fetching: false,
        fetched: true,
      };
    case SET_SELECTED_ACCOUNT_COMPLETE:
      return {
        ...state,
        selectedAccountHash: action.payload,
      };
    default:
      return state;
  }
}
