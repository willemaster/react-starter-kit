/* eslint-disable import/prefer-default-export */
import nodeFetch from 'node-fetch';

import createFetch from '../createFetch';
import { FETCH_ACCOUNTS_START, RECEIVE_ACCOUNTS, FETCH_ACCOUNTS_ERROR, SET_SELECTED_ACCOUNT_START, SET_SELECTED_ACCOUNT_ERROR, SET_SELECTED_ACCOUNT_COMPLETE } from '../constants';

export function fetchAccounts() {
  return async (dispatch) => {
    const fetch = createFetch(nodeFetch, {
      baseUrl: 'http://localhost:3000',
    });

    dispatch({ type: FETCH_ACCOUNTS_START, payload: {} });

    fetch('/graphql', {
      body: JSON.stringify({ query: '{accounts{hash}}' }),
    })
    .then(response => response.json())
    .then(json => dispatch({ type: RECEIVE_ACCOUNTS, payload: json.data.accounts }))
    .catch((error) => {
      dispatch({ type: FETCH_ACCOUNTS_ERROR, payload: { val: error } });
    });
  };
}

export function setSelectedAccount(hash) {
  console.log('in setSelectedAccount'); // eslint-disable-line no-console
  console.log(hash); // eslint-disable-line no-console

  return async (dispatch) => {
    dispatch({ type: SET_SELECTED_ACCOUNT_START, payload: {} });

    const fetch = createFetch(nodeFetch, {
      baseUrl: 'http://localhost:3000',
    });

    fetch('/graphql', {
      body: JSON.stringify({ query: 'mutation{setDefaultAccount(hash:"123"){hash}}' }),
    })
    .then((response) => {
      console.log(response); // eslint-disable-line no-console
      return response.json();
    })
    .then((json) => {
      console.log(json); // eslint-disable-line no-console
      dispatch({ type: SET_SELECTED_ACCOUNT_COMPLETE, payload: json.data });
    })
    .catch((error) => {
      dispatch({ type: SET_SELECTED_ACCOUNT_ERROR, payload: { val: error } });
    });
  };
}
