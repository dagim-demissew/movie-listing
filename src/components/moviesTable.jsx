import React, { Component } from "react";
import Table from "./common/table";

class MoviesTable extends Component {
  render() {
    const { movies, onDelete, onLike, onSort, sortedColumn } = this.props;
    const columns = [
      { path: "title", lable: "Title" },
      { path: "genre.name", lable: "Genre" },
      { path: "numberInStock", lable: "Stock" },
      { path: "dailyRentalRate", lable: "Rate" },
      {
        key: "like",
        content: (movie) => (
          <i
            onClick={() => onLike(movie)}
            style={{ cursor: "pointer" }}
            className={movie.isLiked ? `fa fa-heart` : `fa fa-heart-o`}
            aria-hidden="true"
          />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => onDelete(movie)}
            className="btn btn-danger btn-sm">
            Delete
          </button>
        ),
      },
    ];
    return (
      <Table
        data={movies}
        onSort={onSort}
        columns={columns}
        sortedColumn={sortedColumn}
      />
    );
  }
}

export default MoviesTable;
