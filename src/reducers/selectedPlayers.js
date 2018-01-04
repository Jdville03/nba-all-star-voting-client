export default (state = { eastFrontcourtPlayers: [], eastGuards: [], westFrontcourtPlayers: [], westGuards: [] }, action) => {

  switch (action.type) {
    case "UPDATE_SELECTED_PLAYERS":
      return { eastFrontcourtPlayers: action.eastFrontcourtPlayers, eastGuards: action.eastGuards, westFrontcourtPlayers: action.westFrontcourtPlayers, westGuards: action.westGuards };  
    default:
      return state;
  }
};
