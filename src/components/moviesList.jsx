import React, { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(getMovies());
  }, []);
  const deleteMovie = (movie) => {
    const newList = movies.filter((m) => m._id !== movie._id);
    console.log(newList);
    setMovies(newList);
  };

  return (
    <div style={{ margin: 50 }}>
      {movies.length === 0 ? (
        <h4>There are no movies in the database.</h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rental Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie._id}>
                <th scope="row">{index + 1}</th>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => deleteMovie(movie)}
                    className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoviesList;
