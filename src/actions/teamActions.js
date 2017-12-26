import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchTeams() {
  return dispatch => {
    return fetch(`${API_URL}/teams`)
      .then(response => response.json())
      .then(teams => dispatch({ type: "FETCH_TEAMS", teams }))
      .catch(error => console.log(error));
  };
}
