const INITIAL_STATE = {
  activePokemon: {},
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        [action.payload.type]: [...state[action.payload.type], action.payload.pokemons],
      };
    default:
      return state;
  }
};

export default rootReducer;
