import React from 'react';
import PokemonHeader from 'components/PokemonHeader/PokemonHeader';
import PokemonsContainer from 'containers/PokemonsContainer';
import PokemonDetails from 'components/PokemonDetails/PokemonDetails';
import Page404 from 'components/Page404/Page404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'duck/store';

const App = () => (
  <div className="container-fluid">
    <PokemonHeader />
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PokemonsContainer} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
