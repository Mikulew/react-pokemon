export const getPokemons = pokemons => ({
  type: 'GET_POKEMONS',
  pokemons,
});

export const setActivePage = activePage => ({
  type: 'SET_ACTIVE_PAGE',
  payload: { activePage },
});
