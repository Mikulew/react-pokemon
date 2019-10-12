import { connect } from 'react-redux';
import Pagination from 'components/Pagination/Pagination';
import { setPage, setPageNumbers } from 'duck/actions';

const mapStateToProps = state => {
  return {
    size: state.size,
    limit: state.limit,
    activePage: state.activePage,
  };
};

const mapDispatchToProps = { setPage, setPageNumbers };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
