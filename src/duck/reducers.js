const INITIAL_STATE = {
  activePokemon: {},
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        [action.payload.type]: [...state[action.payload.type], action.payload.pokemon],
      };
    default:
      return state;
  }
};

export default rootReducer;
