import React, { Component } from 'react';
import PokemonItem from 'components/PokemonItem/PokemonItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import Page404 from 'components/Page404/Page404';
import { PageLimitContainer } from 'containers/PageLimitContainer';
import { PaginationContainer } from 'containers/PaginationContainer';
import { BASE_URL } from 'constants/constants';

class PokemonList extends Component {
  state = {
    pokemons: [],
    error: false,
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

  getPokemonsList = async () => {
    const { limit, activePage } = this.props;
    try {
      const response = await fetch(`${BASE_URL}?_page=${activePage}&_limit=${limit}`);
      const data = await response.json();
      if (response.status === 404 || response.status === 500) {
        throw response;
      }
      return this.setState({ pokemons: data });
    } catch (e) {
      this.setState({ error: true });
    }
  };

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
    const {
      history: { push },
    } = this.props;
    push(`/pokemon/${pokemon.id}`);
  };

  render() {
    const { pokemons } = this.state;
    const { limit } = this.props;

    return (
      <>
        {this.state.error ? (
          <Page404 />
        ) : pokemons.length === 0 || limit === null ? (
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
  pokemons: PropTypes.arrayOf(PropTypes.shape({})),
  limit: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  pageNumbers: PropTypes.number,
  size: PropTypes.number,
  setPokemonsSize: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

PokemonList.defaultProps = {
  pokemons: [],
  pageNumbers: null,
  size: null,
};

export default PokemonList;
