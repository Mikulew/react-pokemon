import types from './types';

export const setPokemonsSize = size => ({
  type: types.SET_POKEMONS_SIZE,
  payload: { size },
});

export const setLimit = limit => ({
  type: types.SET_LIMIT,
  payload: { limit },
});

export const setPage = activePage => ({
  type: types.SET_PAGE,
  payload: { activePage },
});

export const setPageNumbers = pageNumbers => ({
  type: types.SET_PAGE_NUMBERS,
  payload: { pageNumbers },
});
