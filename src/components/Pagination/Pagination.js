import React, { Component } from 'react';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

class Pagination extends Component {
  state = {
    pages: [],
  };

  componentDidMount() {
    this.fetchPageNumbers();
  }

  range = (from, to, step = 1) => {
    const range = [];

    while (from <= to) {
      range.push(from);
      from += step;
    }

    return range;
  };

  fetchPageNumbers = () => {
    const { limit, size } = this.props;
    const totalPages = Math.ceil(size / limit);
    const pages = this.range(1, totalPages);
    this.setState({ pages: [LEFT_PAGE, ...pages, RIGHT_PAGE] });
  };

  componentDidUpdate(prevProps) {
    const { limit } = this.props;

    if (prevProps.limit !== limit) {
      this.fetchPageNumbers();
    }
  }

  render() {
    const { setPage, activePage } = this.props;
    const { pages } = this.state;

    return (
      <div className="col-12 mt-2">
        <div className="pagination-container">
          <ul className="pagination">
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)
                return (
                  <li key={index} className={activePage !== 1 ? 'page-item' : 'page-item disabled'}>
                    <button
                      className={activePage !== 1 ? 'page-link' : 'page-link disabled'}
                      aria-label="Previous"
                      onClick={() => setPage(activePage - 1)}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </button>
                  </li>
                );
              if (page === RIGHT_PAGE)
                return (
                  <li
                    key={index}
                    className={
                      activePage !== pages[pages.length - 2] ? 'page-item' : 'page-item disabled'
                    }
                  >
                    <button
                      className={
                        activePage !== pages[pages.length - 2] ? 'page-link' : 'page-link disabled'
                      }
                      aria-label="Next"
                      onClick={() => setPage(activePage + 1)}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </button>
                  </li>
                );
              return (
                <li className={activePage === page ? 'page-item active' : 'page-item'} key={index}>
                  <button onClick={() => setPage(page)} className="page-link">
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Pagination;
