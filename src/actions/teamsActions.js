export function fetchTeams() {
  return dispatch => {
    return fetch('/api/teams')
      .then(response => response.json())
      .then(teams => dispatch({ type: "FETCH_TEAMS", teams }))
      .catch(error => console.log(error));
  };
}
