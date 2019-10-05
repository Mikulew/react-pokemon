const INITIAL_STATE = {
  pokemons: [],
  activePage: 15,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        [action.payload]: [...state[action.payload], action.payload.pokemons],
      };
    case 'SET_ACTIVE_PAGE':
      return {
        ...state,
        activePage: action.payload.activePage,
      };
    default:
      return state;
  }
};

export default rootReducer;
