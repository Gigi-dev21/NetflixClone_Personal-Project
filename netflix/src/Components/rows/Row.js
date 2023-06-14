import React, { useEffect, useState } from "react";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${fetchUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [fetchUrl]);

  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playervar: {
      autoplay: 1,
    },
  };

  // const handleClick = (movie) => {
  //   if (trailer) {
  //     setTrailer("");
  //   } else {
  //     movieTrailer(movie?.title || movie?.name || movie?.original_name)
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailer(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  return (
    <div className="row">
      <div className="titles bold">{title}</div>
      <div className="row__posters">
        {movies.map((data) => (
          <img
            // onClick={() => handleClick()}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={data.id}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? data.poster_path : data.backdrop_path
            }`}
            alt={data.name}
          />
        ))}
      </div>
      {/* <div style={{ padding: "40px" }}>
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </div> */}
    </div>
  );
}

export default Row;
