import React from 'react';
import HeaderPokemon from './layout/HeaderPokemon';
import Pokemons from './layout/Pokemons';
import PokemonDetails from './layout/PokemonDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './duck/store';

const App = () => (
  <div className="container-fluid">
    <HeaderPokemon />
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pokemons} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
