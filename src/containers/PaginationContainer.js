import { connect } from 'react-redux';
import Pagination from 'components/Pagination/Pagination';
import { setPage } from 'duck/actions';

const mapStateToProps = state => {
  return {
    size: state.size,
    limit: state.limit,
    activePage: state.activePage,
  };
};

const mapDispatchToProps = { setPage };

export const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
