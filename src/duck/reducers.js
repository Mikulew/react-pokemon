const INITIAL_STATE = {
  size: null,
  limit: 15,
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
    default:
      return state;
  }
};

export default rootReducer;
