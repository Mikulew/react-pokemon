import { connect } from 'react-redux';
import PokemonList from 'components/PokemonList/PokemonList';
import { addPokemon } from 'duck/actions';

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
  };
};

const mapDispatchToProps = { addPokemon };

export const PokemonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonList);
