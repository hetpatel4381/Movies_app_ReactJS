import React from "react";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      {movie ? (movie.map((currMovie) => {
        return (
          <div>
            <h2>{currMovie.Title}</h2>
          </div>
        );
      })) : <div>Error</div>
      }
    </>
  );
};

export default Movies;