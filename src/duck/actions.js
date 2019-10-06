export const setPokemonsSize = size => ({
  type: 'SET_POKEMONS_SIZE',
  payload: { size },
});

export const setLimit = limit => ({
  type: 'SET_LIMIT',
  payload: { limit },
});

export const setPage = activePage => ({
  type: 'SET_PAGE',
  payload: { activePage },
});
