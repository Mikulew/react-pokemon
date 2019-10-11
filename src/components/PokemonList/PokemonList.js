import React, { Component } from 'react';
import PokemonItem from 'components/PokemonItem/PokemonItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { PageLimitContainer } from 'containers/PageLimitContainer';
import { PaginationContainer } from 'containers/PaginationContainer';
import { BASE_URL } from 'constants/constants';

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
      fetch(`${BASE_URL}`)
        .then(res => res.json())
        .then(json => {
          setPokemonsSize(json.length);
        });
    }
  }

  async getPokemonsList() {
    const { limit, activePage } = this.props;
    try {
      const response = await fetch(`${BASE_URL}?_page=${activePage}&_limit=${limit}`);
      const data = await response.json();
      return this.setState({ pokemons: data });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps) {
    const { limit, activePage } = this.props;

    if (prevProps.limit !== limit || prevProps.activePage !== activePage) {
      this.checkPokemonsLimit(limit);
      this.getPokemonsList();
    }
  }

  checkPokemonsLimit(limit) {
    const { pageNumbers, size, setPage, activePage } = this.props;
    const currentTotalPages = Math.ceil(size / limit);
    if (pageNumbers > currentTotalPages && activePage > currentTotalPages) {
      setPage(currentTotalPages);
    }
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
            <div className="row">
              <PaginationContainer />
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
