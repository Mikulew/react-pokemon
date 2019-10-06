import { connect } from 'react-redux';
import PokemonList from 'components/PokemonList/PokemonList';
import { setPokemonsSize } from 'duck/actions';

const mapStateToProps = state => {
  return {
    size: state.size,
    limit: state.limit,
  };
};

const mapDispatchToProps = { setPokemonsSize };

export const PokemonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonList);
