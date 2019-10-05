import { connect } from 'react-redux';
import PokemonDetails from 'components/PokemonDetails/PokemonDetails';

const mapStateToProps = state => {
  return {
    activePokemon: state.activePokemon,
  };
};

export const PokemonContainer = connect(
  mapStateToProps,
  null,
)(PokemonDetails);
