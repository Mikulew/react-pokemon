import React, { Component } from 'react';
import Pokemon from 'components/pokemon/Pokemon';
import PropTypes from 'prop-types';

class Pokemons extends Component {
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
                <Pokemon key={pokemon.id} {...pokemon} routeChange={this.routeChange} />
              ))}
        </div>
      </div>
    );
  }
}

Pokemons.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

Pokemons.defaultProps = {
  pokemons: [],
};

export default Pokemons;
