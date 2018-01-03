import { combineReducers } from 'redux';
import players from './players';
import teams from './teams';
import selectedPlayers from './selectedPlayers';

export default combineReducers({
  players,
  teams,
  selectedPlayers
});
