import React from 'react';
import HeaderPokemon from './layout/HeaderPokemon';
import Pokemons from './layout/Pokemons';

const App = () => (
  <div className="container-fluid">
    <HeaderPokemon />
    <Pokemons />
  </div>
);

export default App;
