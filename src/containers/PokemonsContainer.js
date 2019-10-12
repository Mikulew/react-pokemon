import { connect } from 'react-redux';
import PokemonList from 'components/PokemonList/PokemonList';
import { setPokemonsSize, setPage } from 'duck/actions';

const mapStateToProps = state => {
  return {
    size: state.size,
    limit: state.limit,
    activePage: state.activePage,
    pageNumbers: state.pageNumbers,
  };
};

const mapDispatchToProps = { setPokemonsSize, setPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonList);
