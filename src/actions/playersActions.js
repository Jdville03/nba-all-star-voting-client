export function fetchPlayers() {
  return dispatch => {
    return fetch('/api/players')
      .then(response => response.json())
      .then(players => dispatch({ type: "FETCH_PLAYERS", players }))
      .catch(error => console.log(error));
  };
};

export function addPlayer(player) {
  return dispatch => {
    return fetch('/api/players', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ player: player })
    })
      .then(response => response.json())
      .then(player => dispatch({ type: "ADD_PLAYER", player }))
      .catch(error => console.log(error));
  };
};

export function upVotePlayer(playerId, playerVotes) {
  return dispatch => {
    return fetch(`/api/players/${playerId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ player: { votes: playerVotes } })
    })
      .then(response => response.json())
      .then(player => dispatch({ type: "UP_VOTE_PLAYER", player }))
      .catch(error => console.log(error));
  };
};

export function updatePlayer(player) {
  return dispatch => {
    return fetch(`/api/players/${player.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ player: player })
    })
      .then(response => response.json())
      .then(player => dispatch({ type: "UPDATE_PLAYER", player }))
      .catch(error => console.log(error));
  };
};

export function removePlayer(playerId) {
  return dispatch => {
    return fetch(`/api/players/${playerId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(player => dispatch({ type: "REMOVE_PLAYER", player }))
      .catch(error => console.log(error));
  };
};

