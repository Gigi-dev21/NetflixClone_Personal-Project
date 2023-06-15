import React, { useEffect, useState } from "react";
import "./banner.css";
import "../../requests/requestPage";
import requests from "../../requests/requestPage";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${requests.fetchNetflix0riginals}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(
          data.results[Math.floor(Math.random() * data.results.length)]
        );
      });
  }, []);
  console.log(movies);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="banneContents">
          <h1 className="bannerTitle">
            {movies.title || movies.name || movies.original_name}
          </h1>
          <div className="bannerContents">
            <button className="bannerButtons">Play</button>
            <button className="bannerButtons">My list</button>
          </div>
          <h1 className="bannerDescription">
            {truncate(movies?.overview, 150)}
          </h1>
        </div>
        <div className="fadebottom"></div>
      </header>
    </div>
  );
}

export default Banner;
