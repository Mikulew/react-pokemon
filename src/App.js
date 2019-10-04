import React from 'react';
import HeaderPokemon from './layout/HeaderPokemon';
import Pokemons from './layout/Pokemons';
import PokemonDetails from './layout/PokemonDetails';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <div className="container-fluid">
    <HeaderPokemon />
    <BrowserRouter>
      <Route exact path="/" component={Pokemons} />
      <Route exact path="/pokemon/:id" component={PokemonDetails} />
    </BrowserRouter>
  </div>
);

export default App;
