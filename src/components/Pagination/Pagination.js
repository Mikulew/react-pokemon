import React, { Component } from 'react';

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
    this.setState({ pages });
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
      <div className="col-12">
        <div className="pagination-container">
          <ul className="pagination">
            {pages.map((page, index) => (
              <li className={activePage === page ? 'page-item active' : 'page-item'} key={index}>
                <button onClick={() => setPage(page)} className="page-link">
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Pagination;
