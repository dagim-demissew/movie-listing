import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to a specific path
    navigate("/movies", { replace: true }); // Replace "/desired-path" with your target route
  };

  return (
    <div>
      <h1>Movie {id}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
