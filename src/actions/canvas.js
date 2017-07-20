/* eslint-disable import/prefer-default-export */
import nodeFetch from 'node-fetch';
import createFetch from '../createFetch';
import { TOGGLE_CANVAS_CELL, SUBMIT_CANVAS_START, SUBMIT_CANVAS_COMPLETE, SUBMIT_CANVAS_ERROR } from '../constants';

const fetch = createFetch(nodeFetch, {
  baseUrl: 'http://localhost:3000',
});

export function toggleCanvasCell(cell) {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_CANVAS_CELL, payload: { cell } });
  };
}

export function submitCanvas(canvas) {
  return async (dispatch) => {
    console.log('submitted canvas: ' + JSON.stringify(canvas));
    dispatch({ type: SUBMIT_CANVAS_START, payload: {} });
    let result;
    try {
      const queryString = `mutation{submitCanvas(tl:${canvas.tl},tc:${canvas.tc},tr:${canvas.tr},cl:${canvas.cl},cc:${canvas.cc},cr:${canvas.cr},bl:${canvas.bl},bc:${canvas.bc},br:${canvas.br}){tl,tc,tr,cl,cc,cr,bl,bc,br}}`;
      console.log('query string: ' + queryString);
      
      const response = await fetch('/graphql', {
        body: JSON.stringify({ query: queryString }),
      });
      console.log('response from submit canvas graphql: ' + JSON.stringify(response));
      dispatch({ type: SUBMIT_CANVAS_COMPLETE, payload: {} });
      result = response.json();
    } catch (error) {
      dispatch({ type: SUBMIT_CANVAS_ERROR, payload: { val: error } });
    }

    return result;
  };
}

