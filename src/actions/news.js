/* eslint-disable import/prefer-default-export */
import nodeFetch from 'node-fetch';

import createFetch from '../createFetch';
import { FETCH_NEWS_START, RECEIVE_NEWS, FETCH_NEWS_ERROR } from '../constants';

export function fetchNews() {
  return async (dispatch) => {
    const fetch = createFetch(nodeFetch, {
      baseUrl: 'http://localhost:3000',
    });

    dispatch({ type: FETCH_NEWS_START, payload: {} });

    fetch('/graphql', {
      body: JSON.stringify({ query: '{news{title,url,text,main_image}}' }),
    })
    .then(response => response.json())
    .then((json) => {
      dispatch({ type: RECEIVE_NEWS, payload: json.data.news });
    })
    .catch((error) => {
      dispatch({ type: FETCH_NEWS_ERROR, payload: { val: error } });
    });
  };
}
