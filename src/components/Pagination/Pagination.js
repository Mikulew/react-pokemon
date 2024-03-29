import React, { Component } from 'react';
import { LEFT_PAGE, RIGHT_PAGE, MIN_PAGE, STEP } from 'constants/constants';
import PropTypes from 'prop-types';

class Pagination extends Component {
  state = {
    pages: [],
  };

  componentDidMount() {
    this.fetchPageNumbers();
  }

  componentDidUpdate(prevProps) {
    const { limit } = this.props;

    if (prevProps.limit !== limit) {
      this.fetchPageNumbers();
    }
  }

  range = (from, to, step = STEP) => {
    const range = [];
    let fromParameter = from;

    while (fromParameter <= to) {
      range.push(fromParameter);
      fromParameter += step;
    }

    return range;
  };

  fetchPageNumbers = () => {
    const { limit, size, setPageNumbers } = this.props;
    const totalPages = Math.ceil(size / limit);
    setPageNumbers(totalPages);
    const pages = this.range(1, totalPages);
    this.setState({ pages: [LEFT_PAGE, ...pages, RIGHT_PAGE] });
  };

  render() {
    const { setPage, activePage } = this.props;
    const { pages } = this.state;
    const MAX_PAGE = pages[pages.length - 2];

    return (
      <div className="col-12 mt-2">
        <div className="pagination-container">
          <ul className="pagination">
            {pages.map(page => {
              if (page === LEFT_PAGE)
                return (
                  <li
                    key={page}
                    className={activePage !== MIN_PAGE ? 'page-item' : 'page-item disabled'}
                  >
                    <button
                      className={activePage !== MIN_PAGE ? 'page-link' : 'page-link disabled'}
                      aria-label="Previous"
                      onClick={() => setPage(activePage - STEP)}
                      type="button"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </button>
                  </li>
                );
              if (page === RIGHT_PAGE)
                return (
                  <li
                    key={page}
                    className={activePage !== MAX_PAGE ? 'page-item' : 'page-item disabled'}
                  >
                    <button
                      className={activePage !== MAX_PAGE ? 'page-link' : 'page-link disabled'}
                      aria-label="Next"
                      onClick={() => setPage(activePage + STEP)}
                      type="button"
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </button>
                  </li>
                );
              return (
                <li className={activePage === page ? 'page-item active' : 'page-item'} key={page}>
                  <button onClick={() => setPage(page)} className="page-link" type="button">
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

Pagination.propTypes = {
  limit: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  setPageNumbers: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
