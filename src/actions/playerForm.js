export const updatePlayerFormData = playerFormData => {
  return {
    type: "UPDATED_DATA",
    playerFormData
  };
};

export const resetPlayerForm = () => {
  return {
    type: "RESET_PLAYER_FORM"
  }
}