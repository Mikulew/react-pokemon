import React, { Component } from 'react';
import { LIMIT_PAGES_NUMBERS } from 'constants/constants';

class PageLimit extends Component {
  state = {
    pageLimits: LIMIT_PAGES_NUMBERS,
  };

  render() {
    const { setLimit, limit, setPage } = this.props;
    const { pageLimits } = this.state;
    return (
      <nav className="pagination-container">
        <ul className="pagination">
          {pageLimits.map((pageLimit, index) => (
            <li className={limit === pageLimit ? 'page-item active' : 'page-item'} key={index}>
              <button onClick={() => setLimit(pageLimit) && setPage(1)} className="page-link">
                {pageLimit}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default PageLimit;
