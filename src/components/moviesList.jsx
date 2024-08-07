import React, { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import Genre from "./genre";
import Pagination from "./common/pagination";
import paginate from "../util/paginate";
import MoviesTable from "./moviesTable";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [currentGenre, setCurrentGenre] = useState({ _id: "", name: "All" });
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedColumn, setSortedColumn] = useState({
    path: "title",
    order: "asc",
  });
  const filtered =
    currentGenre && currentGenre._id
      ? movies.filter((m) => m.genre._id === currentGenre._id)
      : movies;

  const genres = [{ _id: "", name: "All" }, ...genre];
  const sorted = _.orderBy(filtered, [sortedColumn.path], [sortedColumn.order]);
  const movieList = paginate(sorted, currentPage, pageSize);
  useEffect(() => {
    setMovies(getMovies());
    setGenre(getGenres());
  }, []);

  const handleDelete = (movie) => {
    const newList = movies.filter((m) => m._id !== movie._id);
    setMovies(newList);
  };

  const handleToggle = (movie) => {
    const index = movies.findIndex((m) => m._id === movie._id);
    if (index !== -1) {
      const newList = movies.map((m, i) =>
        i === index ? { ...m, isLiked: !m.isLiked } : m
      );
      setMovies(newList);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChangeGenre = (genre) => {
    setCurrentPage(1);
    setCurrentGenre(genre);
    console.log(genre);
  };

  const handleSort = (sortColumn) => {
    setSortedColumn(sortColumn);
  };

  return (
    <div className="row">
      <div className="col-2" style={{ paddingTop: "70px" }}>
        <Genre
          items={genres}
          onChangeGenre={handleChangeGenre}
          currentGenre={currentGenre}
        />
      </div>
      <div className="col">
        <div style={{ margin: 50, flex: "1" }}>
          <p>Showing {filtered.length} movies in the database</p>
          {filtered.length === 0 ? (
            <h4>There are no movies in the database.</h4>
          ) : (
            <MoviesTable
              movies={movieList}
              onLike={handleToggle}
              sortedColumn={sortedColumn}
              onDelete={handleDelete}
              onSort={handleSort}
            />
          )}
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
