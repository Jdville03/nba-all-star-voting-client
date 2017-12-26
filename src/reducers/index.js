import { combineReducers } from 'redux';
import players from './players';
import playerFormData from './playerFormData';
import teams from './teams';

export default combineReducers({
  players,
  playerFormData,
  teams
});
