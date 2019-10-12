import { connect } from 'react-redux';
import PageLimit from 'components/PageLimit/PageLimit';
import { setLimit } from 'duck/actions';

const mapStateToProps = state => {
  return {
    limit: state.limit,
  };
};

const mapDispatchToProps = { setLimit };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageLimit);
