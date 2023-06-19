import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie } = useGlobalContext();

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((currMovie) => {
            const {imdbId, Title, Poster} = currMovie;
            return (
                <NavLink to={`movie/${imdbId}`} key={imdbId}>
                  <div className="card">
                    <div className="card-info">
                      <h2>{Title}</h2>
                      <img src={Poster} alt={imdbId} />
                    </div>
                  </div>
                </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;