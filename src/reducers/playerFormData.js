const initialState = {
  last_name: '',
  first_name: '',
  jersey_number: '',
  position: '',
  image_url: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATED_DATA':
      return action.playerFormData;
    case 'RESET_PLAYER_FORM':
      return initialState;  
    default:
      return state;  
  }
}
