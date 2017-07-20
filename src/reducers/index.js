import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import blocks from './blocks';
import news from './news';
import pictures from './pictures';
import accounts from './accounts';

export default combineReducers({
  user,
  runtime,
  blocks,
  news,
  pictures,
  accounts,
});
