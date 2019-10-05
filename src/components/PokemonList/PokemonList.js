import React, { Component } from 'react';
import PokemonItem from 'components/PokemonItem/PokemonItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { PageNumberContainer } from 'containers/PageNumberContainer';

class PokemonList extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    fetch('http://localhost:4000/pokemon')
      .then(res => res.json())
      .then(json => this.setState({ pokemons: json }));
  }

  routeChange = pokemon => {
    this.props.history.push(`/pokemon/${pokemon.id}`);
  };

  render() {
    const { pokemons } = this.state;

    return (
      <>
        {pokemons.length === 0 ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="row">
              <PageNumberContainer />
            </div>
            <div className="row">
              {pokemons.map(pokemon => (
                <PokemonItem key={pokemon.id} {...pokemon} routeChange={this.routeChange} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

PokemonList.defaultProps = {
  pokemons: [],
};

export default PokemonList;
