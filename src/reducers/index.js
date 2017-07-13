import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import blocks from './blocks';

export default combineReducers({
  user,
  runtime,
  blocks,
});
