/* eslint-disable import/prefer-default-export */
import nodeFetch from 'node-fetch';
import createFetch from '../createFetch';
import { FETCH_PICTURES_START, RECEIVE_PICTURES, FETCH_PICTURES_ERROR } from '../constants';

const fetch = createFetch(nodeFetch, {
  baseUrl: 'http://localhost:3000',
});

export function fetchPictures() {
  return async (dispatch) => {
    console.log('in fetchPictures()');

    dispatch({ type: FETCH_PICTURES_START, payload: {} });

    fetch('/graphql', {
      body: JSON.stringify({ query: '{pictures{tl,tc,tr,cl,cc,cr,bl,bc,br}}' }),
    })
    .then(response => response.json())
    .then(json => dispatch({ type: RECEIVE_PICTURES, payload: json.data.pictures }))
    .catch((error) => {
      dispatch({ type: FETCH_PICTURES_ERROR, payload: { val: error } });
    });
  };
}

