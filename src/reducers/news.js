import { FETCH_NEWS_START, FETCH_NEWS_ERROR, RECEIVE_NEWS } from '../constants';

const initialState = {
  fetching: false,
  newsItems: [],
  error: null,
  fetched: false,
};

export default function blocks(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RECEIVE_NEWS:
      return {
        ...state,
        newsItems: action.payload,
        fetching: false,
      };
    default:
      return state;
  }
}
