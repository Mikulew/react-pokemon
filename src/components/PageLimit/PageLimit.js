import React, { Component } from 'react';
import { LIMIT_PAGES_NUMBERS } from 'constants/constants';
import PropTypes from 'prop-types';

class PageLimit extends Component {
  state = {
    pageLimits: LIMIT_PAGES_NUMBERS,
  };

  render() {
    const { setLimit, limit } = this.props;
    const { pageLimits } = this.state;
    return (
      <nav className="pagination-container">
        <ul className="pagination">
          {pageLimits.map((pageLimit, index) => (
            <li className={limit === pageLimit ? 'page-item active' : 'page-item'} key={index}>
              <button onClick={() => setLimit(pageLimit)} className="page-link">
                {pageLimit}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

PageLimit.propTypes = {
  setLimit: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};

export default PageLimit;
