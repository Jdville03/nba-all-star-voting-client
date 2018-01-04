export function updateSelectedPlayers(players) {
  
  const eastPlayers = players.filter(player => player.team.conference === "Eastern");

  const eastFrontcourtPlayers = eastPlayers
    .filter(player => player.position === "Frontcourt" && player.votes > 0)
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3);
      
  const eastGuards = eastPlayers
    .filter(player => player.position === "Guard" && player.votes > 0)
    .sort((a, b) => b.votes = a.votes)
    .slice(0, 2);
  
  const westPlayers = players.filter(player => player.team.conference === "Western");

  const westFrontcourtPlayers = westPlayers
    .filter(player => player.position === "Frontcourt" && player.votes > 0)
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3);

  const westGuards = westPlayers
    .filter(player => player.position === "Guard" && player.votes > 0)
    .sort((a, b) => (b.votes = a.votes))
    .slice(0, 2);
  
  return dispatch => {
    dispatch({
      type: "UPDATE_SELECTED_PLAYERS",
      eastFrontcourtPlayers: eastFrontcourtPlayers,
      eastGuards: eastGuards,
      westFrontcourtPlayers: westFrontcourtPlayers,
      westGuards: westGuards
    });
  };

  // return {
  //   type: "UPDATE_SELECTED_PLAYERS",
  //   eastFrontcourtPlayers: eastFrontcourtPlayers,
  //   eastGuards: eastGuards,
  //   westFrontcourtPlayers: westFrontcourtPlayers,
  //   westGuards: westGuards
  // };
}