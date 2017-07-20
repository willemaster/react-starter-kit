import { FETCH_ACCOUNTS_START, FETCH_ACCOUNTS_ERROR, RECEIVE_ACCOUNTS, SET_SELECTED_ACCOUNT_COMPLETE } from '../constants';

const initialState = {
  fetching: false,
  accounts: [],
  error: null,
  fetched: false,
  selectedAccountHash: '',
};

export default function blocks(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNTS_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_ACCOUNTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RECEIVE_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        fetching: false,
        selectedAccountHash: action.payload[0].hash,
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
