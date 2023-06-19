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
        <div className="grid grid-4-col">
          {movie.map((currMovie, index) => {
            return (
              <div key={index}>
                <NavLink to={`movie/${currMovie.imdbId}`}>
                  <div className="card">
                    <div className="card-info">
                      <h2>{currMovie.Title}</h2>
                      <img src={currMovie.Poster} alt="#" />
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;