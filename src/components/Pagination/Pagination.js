import React, { Component } from 'react';

class Pagination extends Component {
  state = {
    pages: [1, 2, 3, 4, 5],
  };

  render() {
    const { setPage, activePage } = this.props;
    const { pages } = this.state;

    return (
      <nav className="pagination-container">
        <ul className="pagination">
          {pages.map((page, index) => (
            <li className={activePage === page ? 'page-item active' : 'page-item'} key={index}>
              <button onClick={() => setPage(page)} className="page-link">
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
