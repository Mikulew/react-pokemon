import React, { Component } from 'react';

class PageLimit extends Component {
  state = {
    pageLimits: [5, 15, 25, 50],
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

export default PageLimit;
