export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PLAYERS":
      return action.players;
    case "ADD_PLAYER":
      return state.concat(action.player);  
    default:
      return state;
  }
};
