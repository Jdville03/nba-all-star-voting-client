import { combineReducers } from 'redux';
import players from './players';
import playerFormData from './playerFormData';

export default combineReducers({
  players,
  playerFormData
});
