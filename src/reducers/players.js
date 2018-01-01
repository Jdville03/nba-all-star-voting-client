export default (state = [], action) => {
  let idx;
  let updatedPlayer;
  
  switch (action.type) {
    case "FETCH_PLAYERS":
      return action.players;
    case "ADD_PLAYER":
      return state.concat(action.player);
    case "UP_VOTE_PLAYER":
      idx = state.findIndex(player => player.id === action.player.id);
      updatedPlayer = Object.assign({}, state[idx], { votes: state[idx].votes + 1 });
      return [...state.slice(0, idx), updatedPlayer, ...state.slice(idx + 1)];
    case "UPDATE_PLAYER":
      idx = state.findIndex(player => player.id === action.player.id);
      updatedPlayer = Object.assign({}, state[idx], action.player);
      return [...state.slice(0, idx), updatedPlayer, ...state.slice(idx + 1)];
    default:
      return state;
  }
};
