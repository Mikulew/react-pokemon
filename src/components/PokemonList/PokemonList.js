import React, { Component } from 'react';
import PokemonItem from 'components/PokemonItem/PokemonItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { PageLimitContainer } from 'containers/PageLimitContainer';

class PokemonList extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    this.getPokemonsSize();
    this.getPokemonsList();
  }

  getPokemonsSize() {
    const { size, setPokemonsSize } = this.props;

    if (size === null) {
      fetch('http://localhost:4000/pokemon')
        .then(res => res.json())
        .then(json => {
          setPokemonsSize(json.length);
        });
    }
  }

  getPokemonsList() {
    const { limit } = this.props;

    fetch(`http://localhost:4000/pokemon?_page=1&_limit=${limit}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ pokemons: json });
      });
  }

  routeChange = pokemon => {
    this.props.history.push(`/pokemon/${pokemon.id}`);
  };

  render() {
    const { pokemons } = this.state;
    const { limit } = this.props;

    return (
      <>
        {pokemons.length === 0 || limit === null ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="row">
              <PageLimitContainer />
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
