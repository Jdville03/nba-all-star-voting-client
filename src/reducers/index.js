import { combineReducers } from 'redux';
import players from './players';
import teams from './teams';

export default combineReducers({
  players,
  teams
});
