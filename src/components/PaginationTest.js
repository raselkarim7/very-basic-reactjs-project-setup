import React, { Component } from "react";
import Pagination from "react-js-pagination";


class PaginationTest extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
    this.handlePageChange = this.handlePageChange.bind(this);
    console.log('Inside paginationTest constructor');
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div className = "mt-5 p-5">
        <Pagination
          itemClass="page-item mx-1 rounded"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={17}
          pageRangeDisplayed={7}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default PaginationTest;
