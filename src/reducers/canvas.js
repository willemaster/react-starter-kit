import { TOGGLE_CANVAS_CELL, SUBMIT_CANVAS_START, SUBMIT_CANVAS_COMPLETE, SUBMIT_CANVAS_ERROR } from '../constants';

const initialState = {
  canvas: {
    tl: false,
    tc: false,
    tr: false,
    cl: false,
    cc: false,
    cr: false,
    bl: false,
    bc: false,
    br: false,
  },
  error: null,
};

export default function blocks(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CANVAS_CELL:
      let newCanvas;
      switch (action.payload.cell) {
        case 'tl':
          newCanvas = { ...state.canvas };
          newCanvas.tl = !newCanvas.tl;
          break;
        case 'tc':
          newCanvas = { ...state.canvas };
          newCanvas.tc = !newCanvas.tc;
          break;
        case 'tr':
          newCanvas = { ...state.canvas };
          newCanvas.tr = !newCanvas.tr;
          break;
        case 'cl':
          newCanvas = { ...state.canvas };
          newCanvas.cl = !newCanvas.cl;
          break;
        case 'cc':
          newCanvas = { ...state.canvas };
          newCanvas.cc = !newCanvas.cc;
          break;
        case 'cr':
          newCanvas = { ...state.canvas };
          newCanvas.cr = !newCanvas.cr;
          break;
        case 'bl':
          newCanvas = { ...state.canvas };
          newCanvas.bl = !newCanvas.bl;
          break;
        case 'bc':
          newCanvas = { ...state.canvas };
          newCanvas.bc = !newCanvas.bc;
          break;
        case 'br':
          newCanvas = { ...state.canvas };
          newCanvas.br = !newCanvas.br;
          break;
        default:
          newCanvas = { ...state.canvas };
      }
      return {
        ...state,
        canvas: newCanvas,
      };
    case SUBMIT_CANVAS_START:
      return {
        ...state,
      };
    case SUBMIT_CANVAS_COMPLETE:
      return {
        ...state,
      };
    case SUBMIT_CANVAS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
