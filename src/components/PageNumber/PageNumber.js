import React, { Component } from 'react';

class PageNumber extends Component {
  state = {
    pageNumbers: [5, 15, 25, 50],
  };

  render() {
    const { setActivePage, activePage } = this.props;
    const { pageNumbers } = this.state;
    return (
      <nav className="pagination-container">
        <ul className="pagination">
          {pageNumbers.map((pageNumber, index) => (
            <li
              className={activePage === pageNumber ? 'page-item active' : 'page-item'}
              key={index}
            >
              <button onClick={() => setActivePage(pageNumber)} className="page-link">
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default PageNumber;
