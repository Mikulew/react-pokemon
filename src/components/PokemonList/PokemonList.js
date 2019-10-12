import React, { Component } from 'react';
import PokemonItem from 'components/PokemonItem/PokemonItem';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import Page404 from 'components/Page404/Page404';
import PageLimitContainer from 'containers/PageLimitContainer';
import PaginationContainer from 'containers/PaginationContainer';
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

  componentDidUpdate(prevProps) {
    const { limit, activePage } = this.props;

    if (prevProps.limit !== limit || prevProps.activePage !== activePage) {
      this.checkPokemonsLimit(limit);
      this.getPokemonsList();
    }
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
      return this.setState({ error: true });
    }
  };

  routeChange = pokemon => {
    const {
      history: { push },
    } = this.props;
    push(`/pokemon/${pokemon.id}`);
  };

  checkPokemonsLimit(limit) {
    const { pageNumbers, size, setPage, activePage } = this.props;
    const currentTotalPages = Math.ceil(size / limit);
    if (pageNumbers > currentTotalPages && activePage > currentTotalPages) {
      setPage(currentTotalPages);
    }
  }

  render() {
    const { pokemons, error } = this.state;
    const { limit } = this.props;
    const hasPokemons = pokemons.length === 0 || limit === null;

    if (error) {
      return <Page404 />;
    }
    if (hasPokemons) {
      return <Loader />;
    }

    return (
      <div className="container">
        <div className="row">
          <PageLimitContainer />
        </div>
        <div className="row">
          {pokemons.map(pokemon => (
            <PokemonItem
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              alt={pokemon.alt}
              num={pokemon.num}
              type={pokemon.type}
              img={pokemon.img}
              routeChange={this.routeChange}
            />
          ))}
        </div>
        <div className="row">
          <PaginationContainer />
        </div>
      </div>
    );
  }
}

PokemonList.propTypes = {
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
  pageNumbers: null,
  size: null,
};

export default PokemonList;
