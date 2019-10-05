import { connect } from 'react-redux';
import PokemonList from 'components/PokemonList/PokemonList';
import { getPokemons } from 'duck/actions';

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
  };
};

const mapDispatchToProps = { getPokemons };

export const PokemonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonList);
