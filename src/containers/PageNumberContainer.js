import { connect } from 'react-redux';
import PageNumber from 'components/PageNumber/PageNumber';
import { setActivePage } from 'duck/actions';

const mapStateToProps = state => {
  return {
    activePage: state.activePage,
  };
};

const mapDispatchToProps = { setActivePage };

export const PageNumberContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageNumber);
