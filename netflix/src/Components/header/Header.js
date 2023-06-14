import React, { useEffect, useState } from "react";
import "./header.css";
import "../../requests/requestPage";
import requests from "../../requests/requestPage";

function Header() {
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
        <div className="banner__contents">
          <h1 className="banner__title">
            {movies.title || movies.name || movies.original_name}
          </h1>
          <div className="banner__contents">
            <button className="banner__buttons">Play</button>
            <button className="banner__buttons">My list</button>
          </div>
          <h1 className="banner__description">{movies?.overview}</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
