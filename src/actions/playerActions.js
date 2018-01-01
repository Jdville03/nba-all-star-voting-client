import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchPlayers() {
  return dispatch => {
    return fetch(`${API_URL}/players`)
      .then(response => response.json())
      .then(players => dispatch({ type: "FETCH_PLAYERS", players }))
      .catch(error => console.log(error));
  };
};

export function addPlayer(player) {
  return dispatch => {
    return fetch(`${API_URL}/players`, {
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
    return fetch(`${API_URL}/players/${playerId}`, {
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
    return fetch(`${API_URL}/players/${player.id}`, {
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
    return fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(player => dispatch({ type: "REMOVE_PLAYER", player }))
      .catch(error => console.log(error));
  };
};

