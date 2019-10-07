import types from './types';
import { INITIAL_STATE } from 'constants/constants';

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_POKEMONS_SIZE:
      return {
        ...state,
        size: action.payload.size,
      };
    case types.SET_LIMIT:
      return {
        ...state,
        limit: action.payload.limit,
      };
    case types.SET_PAGE:
      return {
        ...state,
        activePage: action.payload.activePage,
      };
    case types.SET_PAGE_NUMBERS:
      return {
        ...state,
        pageNumbers: action.payload.pageNumbers,
      };
    default:
      return state;
  }
};

export default rootReducer;
