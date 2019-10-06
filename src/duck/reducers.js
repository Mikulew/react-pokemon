const INITIAL_STATE = {
  size: null,
  limit: 15,
  activePage: 1,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_POKEMONS_SIZE':
      return {
        ...state,
        size: action.payload.size,
      };
    case 'SET_LIMIT':
      return {
        ...state,
        limit: action.payload.limit,
      };
    case 'SET_PAGE':
      return {
        ...state,
        activePage: action.payload.activePage,
      };
    default:
      return state;
  }
};

export default rootReducer;
