/* eslint-disable import/prefer-default-export */
import nodeFetch from 'node-fetch';

import createFetch from '../createFetch';
import { FETCH_BLOCKS_START, RECEIVE_BLOCKS, FETCH_BLOCKS_ERROR } from '../constants';

export function fetchBlocks() {
  return async (dispatch) => {
    const fetch = createFetch(nodeFetch, {
      baseUrl: 'http://localhost:3000',
    });

    dispatch({ type: FETCH_BLOCKS_START, payload: {} });

    fetch('/graphql', {
      body: JSON.stringify({ query: '{blocks{author,difficulty,gasLimit,gasUsed,hash,miner,number,parentHash,signature,size,timestamp,transactions}}' }),
    })
    .then(response => response.json())
    .then(json => dispatch({ type: RECEIVE_BLOCKS, payload: json.data.blocks }))
    .catch((error) => {
      dispatch({ type: FETCH_BLOCKS_ERROR, payload: { val: error } });
    });
  };
}
