import React, { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { Link } from "react-router-dom";
import _ from "lodash";
import Genre from "./genre";
import Pagination from "./common/pagination";
import paginate from "../util/paginate";
import MoviesTable from "./moviesTable";
import Input from "./common/input";

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
  const [searchValue, setSearchValue] = useState("");
  // Filter movies based on selected genre or search input
  let filtered = movies;
  if (searchValue) {
    filtered = movies.filter((m) =>
      m.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else if (currentGenre && currentGenre._id) {
    filtered = movies.filter((m) => m.genre._id === currentGenre._id);
  }

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
  };

  const handleSort = (sortColumn) => {
    setSortedColumn(sortColumn);
  };
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setCurrentGenre({ _id: "", name: "All" });
    setCurrentPage(1);
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
        <div style={{ margin: 30, flex: "1" }}>
          <p>Showing {filtered.length} movies in the database</p>
          <Input
            placeholder="Search"
            id={"name"}
            label={"Name"}
            name={"name"}
            type={"text"}
            inputValue={searchValue}
            onHandleChange={handleChange}
          />
          <Link to={"/movies/new"} className="btn btn-primary m-2">
            New Movie
          </Link>
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
