import React, { useEffect, useState } from "react";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3${fetchUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [fetchUrl]);

  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="containers">
      <div className="row">
        <div className="titles ">{title}</div>
        <div className="rowPosters">
          {movies.map((data) => (
            <img
              onClick={() => handleClick(data)}
              className={`rowPoster ${isLargeRow && "largePoster"}`}
              key={data.id}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? data.poster_path : data.backdrop_path
              }`}
              alt={data.name}
            />
          ))}
        </div>
        <div style={{ padding: "40px", width: "1300px" }}>
          {trailer && <YouTube videoId={trailer} opts={opts} />}
        </div>
      </div>
    </div>
  );
}

export default Row;
