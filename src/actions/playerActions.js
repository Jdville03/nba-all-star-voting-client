import fetch from "isomorphic-fetch";

const API_URL = process.env.REACT_APP_API_URL;

export function fetchPlayers() {
  return dispatch => {
    return fetch(`${API_URL}/players`)
      .then(response => response.json())
      .then(players => dispatch({ type: "FETCH_PLAYERS", players }))
      .catch (error => console.log(error));
  };
}


