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

