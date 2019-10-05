import React, { Component } from 'react';
import PokemonItem from 'components/PokemonItem/PokemonItem';
import PropTypes from 'prop-types';

class PokemonList extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(res => res.json())
      .then(json => this.setState({ pokemons: json.pokemon }));
  }

  routeChange = pokemon => {
    this.props.history.push(`/pokemon/${pokemon.id}`);
  };

  render() {
    const { pokemons } = this.state;

    return (
      <div className="container">
        <div className="row">
          {!pokemons
            ? 'Loading'
            : pokemons.map(pokemon => (
                <PokemonItem key={pokemon.id} {...pokemon} routeChange={this.routeChange} />
              ))}
        </div>
      </div>
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
