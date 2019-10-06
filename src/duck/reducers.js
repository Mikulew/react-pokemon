const INITIAL_STATE = {
  size: null,
  activePage: 15,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_POKEMONS_SIZE':
      return {
        ...state,
        size: action.payload.size,
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
